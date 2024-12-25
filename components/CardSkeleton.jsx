import React from "react";

const CardSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 bg-white shadow rounded-lg p-4">
      {/* Title */}
      <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
      {/* Hero Image */}
      <div className="h-32 w-full bg-gray-300 rounded"></div>
    </div>
  );
};

export default CardSkeleton;
