import React, { useEffect } from "react";
import "../styles/cursor.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
    useEffect(() => {
        const cursorDot = document.querySelector(".cursor-dot");
        const cursorOutline = document.querySelector(".cursor-outline");

        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            cursorDot.style.top = `${clientY}px`;
            cursorDot.style.left = `${clientX}px`;
            cursorOutline.style.top = `${clientY}px`;
            cursorOutline.style.left = `${clientX}px`;
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
        >
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/bg-video.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 px-4">
                <p className="text-lg md:text-xl mb-2">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold">
                    <span className="text-white">Jai </span>
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                        Patel
                    </span>
                </h1>

          
                {/* Typewriter Effect */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                    <Typewriter
                        options={{
                            strings: ["Backend Developer", "Frontend Developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                    Crafting Digital Experiences
                </p>

                <p className="mt-6 max-w-2xl text-gray-300 text-sm md:text-base px-4">
                    I transform ideas into elegant digital solutions, blending creativity
                    with technical excellence to create experiences that inspire and
                    engage.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 justify-center flex-wrap">
                    <a
                        href="#projects"
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:opacity-90 transition flex items-center gap-2"
                    >
                        Explore My Work →
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 flex flex-col items-center z-20">
                <span className="text-xs tracking-widest">SCROLL</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mt-2">
                    <div className="w-1 h-2 bg-white animate-bounce mt-1 rounded-full"></div>
                </div>
            </div>

            {/* Custom Cursor */}
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </section>
    );
}
