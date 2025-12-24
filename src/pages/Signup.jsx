import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Signup = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);
        try {
            await signup(formData.name, formData.email, formData.password);
            toast.success("Account created successfully!");
            navigate("/");
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center dark:text-white py-10">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Join WebStore today</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-bold hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
