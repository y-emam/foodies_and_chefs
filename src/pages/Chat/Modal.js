import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform scale-95 opacity-0 animate-fadeIn">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-2 text-gray-600">{children}</div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-red-500 rounded-lg"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
