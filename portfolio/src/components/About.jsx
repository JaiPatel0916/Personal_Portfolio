import React, { useEffect, useRef, useState } from "react";
import { FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/cursor.css"; // Custom cursor styles

export default function About() {
    const sectionRef = useRef(null);
    const educationRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);

    // Custom cursor logic
    useEffect(() => {
        const cursorDot = document.querySelector(".cursor-dot");
        const cursorOutline = document.querySelector(".cursor-outline");

        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            if (cursorDot && cursorOutline) {
                cursorDot.style.top = `${clientY}px`;
                cursorDot.style.left = `${clientX}px`;
                cursorOutline.style.top = `${clientY}px`;
                cursorOutline.style.left = `${clientX}px`;
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    // Intersection Observer for Education Journey only
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect(); // trigger only once
                }
            },
            { threshold: 0.3 }
        );

        if (educationRef.current) {
            observer.observe(educationRef.current);
        }

        return () => {
            if (educationRef.current) {
                observer.unobserve(educationRef.current);
            }
        };
    }, []);

    // Animation variants for sequential downward slide
    const itemVariants = {
        hidden: { opacity: 0, y: -80, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.5, // sequence timing
                duration: 0.9,
                ease: "easeOut"
            }
        })
    };

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative w-full min-h-screen text-white py-16 px-6 md:px-20 overflow-hidden"
        >
            {/* Background Stars Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/assets/stars-bg-fallback.jpg"
            >
                <source src="/assets/stars-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>

            {/* Title */}
            <div className="text-center mb-12 relative z-20">
                <h2 className="text-4xl font-bold">
                    About<span className="text-purple-400"> Me</span>
                </h2>
                
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 relative z-20">
                {/* Left Side - Who I Am */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                    <p className="text-gray-300 mb-4 md:text-xl">
                        Hello everyone  I'm <span className="text-purple-400 font-semibold">Jai Patel</span>,
                        currently pursuing my BTech at SB Jain Institute of Technology Management and Research. I’m a developer with a strong passion for creating engaging and intuitive digital experiences, specializing in front-end development while possessing deep expertise in backend systems. My strength lies in crafting seamless user interfaces backed by robust backend logic and efficient API integrations.
                    </p>
                    <p className="text-gray-300 mb-6  md:text-xl">
                        I continuously sharpen my skills and keep pace with evolving industry trends to create projects that blend visual elegance with reliable, high-performing functionality.
                    </p>
                </div>

                {/* Right Side - Education Journey */}
                <div ref={educationRef}>
                    <h3 className="text-2xl font-semibold mb-6">Education Journey</h3>

                    <div className="space-y-8">
                        {[
                            {
                                title: "Bachelor of Technology in Computer Science",
                                date: "2022 - Present",
                                university: "S.B Jain Institute of Technology Management and Research",
                                location: "Yerla, Nagpur",
                                tags: ["CGPA: 8.67/10.0",]
                            },
                            {
                                title: "Higher Secondary Certificate (12th) ",
                                date: "2020 - 2022",
                                university: "Bharti Krishna Vidya Vihar",
                                location: "Nagpur",
                                tags: ["Percentage: 71%"]
                            },
                            {
                                title: " Secondary School Certificate (10th)",
                                date: "2019-2020",
                                university: "Bharti Krishna Vidya Vihar",
                                location: "Nagpur",
                                tags: ["Percentage: 76%"]
                            }
                        ].map((edu, i) => (
                            <motion.div
                                key={i}
                                className="bg-gray-800/60 p-6 rounded-xl border border-gray-700"
                                variants={itemVariants}
                                initial="hidden"
                                animate={startAnimation ? "visible" : "hidden"}
                                custom={i}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold">{edu.title}</h4>
                                    <span className="flex items-center gap-1 text-sm text-gray-400">
                                        <FaCalendarAlt /> {edu.date}
                                    </span>
                                </div>
                                <p className="text-sm text-purple-300 flex items-center gap-1">
                                    <FaUniversity /> {edu.university}
                                </p>
                                <p className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                                    <FaMapMarkerAlt /> {edu.location}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {edu.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs bg-blue-600 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Cursor */}
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </section>
    );
}
