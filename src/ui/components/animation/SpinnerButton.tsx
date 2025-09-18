import React from "react";

// SpinnerButton.tsx
// A small, accessible Tailwind-styled button component that shows a spinner while submitting.
// Default export is a React component. Usage example shown in comments below.

type SpinnerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isSubmitting?: boolean;
  spinnerSize?: "sm" | "md" | "lg";
};

export default function SpinnerButton({
  isSubmitting = false,
  spinnerSize = "md",
  children,
  className = "",
  ...props
}: SpinnerButtonProps) {
  const sizeClasses = {
    sm: "h-4 w-4 mr-2",
    md: "h-5 w-5 mr-2",
    lg: "h-6 w-6 mr-3",
  } as const;

  return (
    <button
      type={props.type || "submit"}
      disabled={isSubmitting || props.disabled}
      aria-busy={isSubmitting}
      aria-live="polite"
      className={`w-full mx-auto bg-black text-white text-sm sm:text-lg py-2 my-5 rounded opacity-90 hover:opacity-100 transition flex items-center justify-center ${
        isSubmitting ? "cursor-wait" : "cursor-pointer"
      } ${className}`}
      {...props}
    >
      {isSubmitting && (
        <svg
          className={`animate-spin ${sizeClasses[spinnerSize]}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}

      <span className="text-sm font-medium">
        {isSubmitting ? "Please wait..." : children}
      </span>
    </button>
  );
}

/*
Usage examples:

1) With React Hook Form

import { useForm } from "react-hook-form";
import SpinnerButton from "./SpinnerButton";

function LoginForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // submit logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      <input {...register("password")} type="password" />

      <SpinnerButton type="submit" isSubmitting={isSubmitting}>
        Log in
      </SpinnerButton>
    </form>
  );
}

2) As an inline small spinner inside an already styled button:

<SpinnerButton isSubmitting={loading} spinnerSize="sm" className="w-auto px-4">
  Submit
</SpinnerButton>

Notes:
- Tailwind classes are used for styling. Adjust className as needed.
- The SVG uses currentColor so it will respect the button text color.
- The component sets aria-busy and aria-live for accessibility.
*/
