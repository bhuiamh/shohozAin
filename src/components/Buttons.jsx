import React from "react";

// Primary Button Component
export const PrimaryButton = ({ onClick, disabled, children }) => {
  return (
    <button
    disabled={disabled}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-4 py-2 overflow-hidden text-white ${disabled ? "cursor-not-allowed bg-orange-400" : "cursor-pointer bg-orange-500"} rounded-lg group`}
    >
      <span className={`absolute w-0 h-0 transition-all duration-500 ease-out ${disabled ? "opacity-0" : "opacity-1000"} bg-green-500 rounded-full tablet:group-hover:w-56 tablet:group-hover:h-56`}></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange-900"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

// Secondary Button Component
export const SecondaryButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden text-white bg-green-500 rounded-lg group"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-500 rounded-full tablet:group-hover:w-56 tablet:group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange-900"></span>
      <span className="relative">{children}</span>
    </button>
  );
};
