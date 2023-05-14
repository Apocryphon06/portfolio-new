import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <p className="text-[#808080] lg:text-7xl md:text-5xl text-4xl font-medium">
        404
      </p>
      <p className="text-[#323232] lg:text-xl md:text-lg text-base mt-5">
        Page your looking for doesn't not exist
      </p>
    </div>
  );
};

export default NotFound;
