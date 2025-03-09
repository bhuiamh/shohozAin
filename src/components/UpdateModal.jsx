import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const UpdateModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      
    >
      <div
        className="bg-black/25 backdrop-blur-md p-4 rounded-lg max-w-lg m-5 tablet:m-0 tablet:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-3 -right-3 text-gray-500 bg-white h-10 w-10 flex items-center justify-center rounded-full"
          onClick={onClose}
        > <IoCloseSharp size={25} className="text-orange-500"/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default UpdateModal;
