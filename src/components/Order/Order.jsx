import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Order = () => {
    const { cartItems, cartTotal } = useCart();

    const handlePayment = () => {
        // Redirect to Razorpay link
        window.location.href = "https://rzp.io/rzp/amitpatra";
    };

    if (cartItems.length === 0) {
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center text-center dark:text-white">
                <h2 className="text-2xl font-bold mb-4">No items to checkout</h2>
                <Link to="/" className="text-primary hover:underline">Return to Home</Link>
            </div>
        )
    }

    return (
        <div className="container py-14 min-h-[70vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">Checkout</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {/* Shipping Form (Visual Only for now) */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                        <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                        <input type="text" placeholder="Address" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="City" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                            <input type="text" placeholder="Zip Code" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
                    <h2 className="text-xl font-bold mb-6">Payment Summary</h2>
                    <div className="space-y-3 mb-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">{item.title} (x{item.quantity})</span>
                                <span>${(item.price || 100) * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-4 flex justify-between font-bold text-xl mb-8">
                        <span>Total Amount</span>
                        <span>${cartTotal}</span>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                        Pay Now with Razorpay
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        Secure payment powered by Razorpay. You will be redirected to complete the transaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Order;
