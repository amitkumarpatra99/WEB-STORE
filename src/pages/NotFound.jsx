import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container py-14 flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                404
            </h1>
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-500 mb-8 max-w-md">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link
                to="/"
                className="bg-primary text-white py-2 px-8 rounded-full hover:bg-secondary duration-300 shadow-lg group flex items-center gap-2"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
