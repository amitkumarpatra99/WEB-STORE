import React from "react";

const About = () => {
    return (
        <div className="container py-14">
            <div className="py-10">
                <h1 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                    About Us
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div data-aos="fade-right">
                        <img
                            src="https://picsum.photos/400/300"
                            alt="About Us"
                            className="rounded-lg shadow-md w-full object-cover h-[300px]"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-500 mb-4 leading-relaxed">
                            At WebStore, our mission is to provide the best shopping experience for our customers.
                            We believe in quality, affordability, and exceptional customer service.
                            Our journey started with a simple idea: to make premium products accessible to everyone.
                        </p>
                        <p className="text-gray-500 mb-4 leading-relaxed">
                            We curate a wide range of products from top brands and trusted suppliers to ensure
                            that you get only the best. Whether you are looking for electronics, fashion, or
                            home essentials, we have got you covered.
                        </p>
                        <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-secondary duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
