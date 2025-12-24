import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";

const CancelPopup = ({ visible, onClose }) => {
    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            style={{ zIndex: 9999, animation: 'fadeIn 0.3s ease-out' }}
        >
            <div
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-[320px] relative flex flex-col items-center"
                style={{ animation: 'scaleUp 0.4s ease-out' }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                >
                    <IoCloseOutline size={24} />
                </button>

                {/* Animated Icon */}
                <div className="mb-6 animate-bounce">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 rounded-full blur-xl opacity-70"></div>
                        <FaTimesCircle className="relative text-7xl text-red-500 drop-shadow-md" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                    Order Cancelled!
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Your order has been cancelled successfully. The refund process will be initiated shortly.
                </p>

                <button
                    onClick={onClose}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-red-200 dark:shadow-none transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
};

export default CancelPopup;
