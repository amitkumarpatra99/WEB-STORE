import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center text-center dark:text-white">
                <h2 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h2>
                <p className="text-gray-500 mb-8">Save items you love to buy later!</p>
                <Link to="/" className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition-all">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-14 min-h-[60vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">My Wishlist ({wishlistItems.length})</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative group overflow-hidden">
                        <div className="h-[200px] w-full p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50">
                            <img src={item.img} alt={item.title} className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                            <p className="text-sm text-gray-400 mb-2">{item.color}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-xl">₹{item.price}</span>
                                <button
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                                    title="Remove from Wishlist"
                                >
                                    <FaTrash size={14} />
                                </button>
                            </div>
                            <Link to={`/product/${item.id}`} className="block mt-4 text-center w-full py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
