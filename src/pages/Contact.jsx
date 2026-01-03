

const Contact = () => {
    return (
        <div className="container py-14">
            <div className="py-10">
                <h1 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                    Contact Us
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md" data-aos="fade-right">
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-primary"
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-primary"
                            ></textarea>
                            <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-secondary duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center" data-aos="fade-left">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-500 mb-6">
                            Have questions? We'd love to hear from you. customized support is just a message away.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl">
                                    📍
                                </span>
                                <p className="text-gray-600 dark:text-gray-400">Puri, Odisha, India</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl">
                                    📞
                                </span>
                                <p className="text-gray-600 dark:text-gray-400">+91 1234567890</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl">
                                    📧
                                </span>
                                <p className="text-gray-600 dark:text-gray-400">support@webstore.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
