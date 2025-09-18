import React, { useRef, useState, useEffect } from "react";

type FileWithPreview = {
  file: File;
  id: string;
  preview?: string; // for image previews (object URL)
};

interface ImageFileSelectorProps {
  onFilesChange?: (files: File[]) => void;
  accept?: string; // e.g. "image/*,application/pdf"
  multiple?: boolean;
  maxSize?: number; // bytes, default: 5MB
  maxFiles?: number; // maximum number of files user may add
  initialFiles?: File[]; // optional preloaded files
  className?: string;
  showPreview?: boolean; // show image preview thumbnails
}

/**
 * ImageFileSelector - drag-and-drop + click-to-browse file input
 *
 * Usage:
 * <ImageFileSelector onFilesChange={files => console.log(files)} accept="image/*" multiple />
 */
const ImageFileSelector: React.FC<ImageFileSelectorProps> = ({
  onFilesChange,
  accept = "image/*",
  multiple = true,
  maxSize = 5 * 1024 * 1024, // 5 MB default
  maxFiles = 10,
  initialFiles = [],
  className = "",
  showPreview = true,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // initialize with any initialFiles
  useEffect(() => {
    if (initialFiles.length === 0) return;
    const prepared = initialFiles.slice(0, maxFiles).map((f) => ({
      file: f,
      id: cryptoRandomId(),
      preview: isImageFile(f) ? URL.createObjectURL(f) : undefined,
    }));
    setFiles(prepared);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // cleanup previews on unmount
  useEffect(() => {
    return () => {
      files.forEach((f) => f.preview && URL.revokeObjectURL(f.preview));
    };
  }, [files]);

  useEffect(() => {
    onFilesChange?.(files.map((f) => f.file));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  function cryptoRandomId() {
    // fallback to Math.random if crypto not available
    try {
      return (
        (crypto as any).randomUUID?.() ?? Math.random().toString(36).slice(2, 9)
      );
    } catch {
      return Math.random().toString(36).slice(2, 9);
    }
  }

  function isImageFile(f: File) {
    return f.type.startsWith("image/");
  }

  function handleFilesList(selectedFiles: FileList | null) {
    setError(null);
    if (!selectedFiles) return;

    const incoming = Array.from(selectedFiles);

    // validate count
    const remainingSlots = Math.max(0, maxFiles - files.length);
    if (incoming.length > remainingSlots) {
      setError(`You may only add ${remainingSlots} more file(s).`);
    }

    const allowable = incoming.slice(0, remainingSlots);

    const mapped = allowable
      .map((f) => {
        if (f.size > maxSize) {
          // mark error but still skip that file
          setError((prev) =>
            prev ? prev + ` ${f.name} is too large.` : `${f.name} is too large.`
          );
          return null;
        }
        return {
          file: f,
          id: cryptoRandomId(),
          preview:
            showPreview && isImageFile(f) ? URL.createObjectURL(f) : undefined,
        } as FileWithPreview;
      })
      .filter(Boolean) as FileWithPreview[];

    if (mapped.length === 0) return;

    setFiles((prev) => [...prev, ...mapped]);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFilesList(e.dataTransfer.files);
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    // set drop effect to copy
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  }

  function onDragLeave(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  function openFileDialog() {
    inputRef.current?.click();
  }

  function removeFile(id: string) {
    setFiles((prev) => {
      const next = prev.filter((p) => {
        if (p.id === id) {
          if (p.preview) URL.revokeObjectURL(p.preview);
          return false;
        }
        return true;
      });
      return next;
    });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    // support Enter and Space to open file dialog when dropzone has focus
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFileDialog();
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        role="button"
        tabIndex={0}
        aria-label="File upload dropzone"
        onKeyDown={handleKeyDown}
        onClick={openFileDialog}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnter={onDragOver}
        onDragLeave={onDragLeave}
        className={
          "flex flex-col items-center justify-center gap-3 p-6 rounded-lg border-2 border-dashed " +
          (isDragging
            ? "border-blue-400 bg-blue-50"
            : "border-gray-300 bg-white") +
          " cursor-pointer"
        }
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={(e) => handleFilesList(e.target.files)}
        />

        <div className="text-center">
          <svg
            className="mx-auto mb-2 w-10 h-10 text-gray-400"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M24 4v26"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 12l8-8 8 8"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="6"
              y="18"
              width="36"
              height="24"
              rx="3"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>

          <p className="text-sm text-gray-600">
            Drag & drop files here, or{" "}
            <span className="text-blue-600 underline">click to browse</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {accept ? `Accepted: ${accept}` : ""}{" "}
            {multiple ? " • Multiple allowed" : ""}
            {" • "}Max {Math.round((maxSize / 1024 / 1024) * 100) / 100} MB per
            file
          </p>
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {files.map((fwp) => (
            <div
              key={fwp.id}
              className="relative border rounded-lg p-2 bg-gray-50"
            >
              {fwp.preview ? (
                <img
                  src={fwp.preview}
                  alt={fwp.file.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center text-sm text-gray-600">
                  <div>
                    <div className="font-medium">{fwp.file.name}</div>
                    <div className="text-xs text-gray-500">
                      {formatBytes(fwp.file.size)}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-2 flex items-center justify-between gap-2">
                <div className="text-xs text-gray-600 truncate">
                  {fwp.file.name}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => removeFile(fwp.id)}
                    className="text-sm text-red-600 hover:underline"
                    aria-label={`Remove ${fwp.file.name}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageFileSelector;

/* Helpers */
function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
