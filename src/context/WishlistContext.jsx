import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem("webStoreWishlist");
        if (storedWishlist) {
            setWishlistItems(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("webStoreWishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (product) => {
        const exists = wishlistItems.find((item) => item.id === product.id);
        if (exists) {
            toast.error("Item already in Wishlist");
            return;
        }
        setWishlistItems([...wishlistItems, product]);
        toast.success("Added to Wishlist");
    };

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter((item) => item.id !== id));
        toast.success("Removed from Wishlist");
    };

    const isInWishlist = (id) => {
        return wishlistItems.some((item) => item.id === id);
    };

    const value = {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
};
