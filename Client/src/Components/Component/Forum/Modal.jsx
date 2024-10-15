import React from "react";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-sm p-4 max-w-2xl w-full relative"> 
                <button
                    onClick={onClose}
                    className="absolute top-7 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                    <RxCross1 /> {/* Close icon */}
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
