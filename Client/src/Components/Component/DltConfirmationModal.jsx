import React from "react";

const DltConfirmationModal = ({ isModalOpen, setIsModalOpen, onDltHandler, title, subtitle, id }) => {
  return (
    <div
      className={`fixed ${
        isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-all duration-300 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-24 p-6`}
      onClick={() => setIsModalOpen(false)}>
      <div className="bg-white p-6 max-w-96 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-neutral-700">{subtitle}</p>
        <div className="mt-4 flex justify-end">
          <button className="bg-gray-500 text-white p-2 rounded mr-2" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
          <button className={`bg-red-600 text-white p-2 rounded`} onClick={() => onDltHandler(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DltConfirmationModal;
