

const ProfileLoadingTest = () => {
  return (
    <div className="animate-pulse bg-white shadow-md p-4 w-full max-w-sm mx-auto">
      {/* User ID Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-300 h-4 w-48 rounded"></div>
        <div className="bg-gray-300 h-4 w-16 rounded"></div>
      </div>

      {/* Image Skeleton */}
      <div className="bg-gray-300 h-40 w-full  mb-4"></div>

      {/* Time Section */}
      <div className="bg-gray-300 h-4 w-24 rounded mb-2"></div>

      {/* Name Section */}
      <div className="bg-gray-300 h-4 w-32 rounded mb-1"></div>

      {/* Email Section */}
      <div className="bg-gray-300 h-4 w-48 rounded"></div>
    </div>
  );
};

export default ProfileLoadingTest;