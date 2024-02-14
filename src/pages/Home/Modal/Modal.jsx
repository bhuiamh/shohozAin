import React, { useState, useEffect } from "react";

const Modal = ({ onClose, backgroundColor = "transparent" }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsOpen(false), 10000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Call external onClose handler, if provided
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full ${
        isOpen
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-200 ease-in-out"
      } z-50`}
    >
      <div
        className={`fixed top-0 left-0 w-full h-full bg-${backgroundColor} backdrop-blur-md backdrop-opacity-50`}
        onClick={handleClose}
      />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-md px-4 py-5 shadow-md`}
      >
        {" "}
        <div className="flex justify-end">
          {" "}
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 "
          >
            close icon
          </button>
        </div>
        <div className="flex items-center justify-between p-10">
          <h2 className="text-4xl text-center tablet:text-6xl text-orange-500 font-extrabold">
            সহজ আইন
          </h2>
        </div>
        <div className="mt-4 text-2xl tablet:text-3xl text-orange-500 font-semibold">
          সহজ সমাধান, আপনার সকল আইনি জটিলতায়
        </div>
      </div>
    </div>
  );
};

export default Modal;
