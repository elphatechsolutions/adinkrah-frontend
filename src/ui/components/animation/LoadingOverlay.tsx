const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center space-y-4 text-gray-800">
        {/* Loading Spinner */}
        <div className="w-16 h-16 border-4 border-t-4 border-gray-400 border-t-blue-500 rounded-full animate-spin"></div>
        {/* Loading Message */}
        <p className="text-xl font-semibold">Page is loading please wait...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
