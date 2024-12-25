import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="bg-white animate-pulse space-y-4 p-2">
      {/* Category */}
      <div className="h-6 w-32 bg-gray-300 rounded-full"></div>

      {/* Title */}
      <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

      {/* Hero Image */}
      <div className="h-48 w-full bg-gray-300 rounded-lg"></div>

      {/* Date */}
      <div className="h-4 w-20 bg-gray-300 rounded"></div>

      {/* Paragraphs */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
