import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-[99]">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
                >
                    <FaArrowUp className="text-xl" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
