import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(formData.email, formData.password);
            toast.success("Logged in successfully!");
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
                <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Login to your account</p>

                <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="flex justify-end">
                        <Link to="#" className="text-sm text-primary hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary font-bold hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
