const LoadingSpinner = () => {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-primary-300 rounded-full animate-pulse"></div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-lg font-medium text-gray-700">Generating creative business names</span>
          <span className="ml-2 flex space-x-1">
            <span className="animate-bounce delay-75">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500">This may take a few moments</p>
      </div>
    );
  };
  
  export default LoadingSpinner;