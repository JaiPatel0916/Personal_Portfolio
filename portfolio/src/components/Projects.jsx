import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const personalProjects = [
    {
        title: "Personal Portfolio Website",
        description:
            "A modern portfolio website showcasing my projects and skills, built with React and Tailwind CSS.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        image: "/assets/portfolio.png", 
        demoLink: "#",
        codeLink: null,
    },
    {
        title: "Virtual Group Study Platform",
        description:
            "An online collaborative study platform where students can create groups, share notes, and chat in real time.Includes group management(create/ join / leave), persistent chat history, and real - time updates to keep everyone in sync during study sessions.",
        tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
        image: "/assets/virtual.jpg",
        demoLink: null,
        codeLink: "https://github.com/JaiPatel0916/virtual-study-group",
    },
    {
        title: "Smart Recipe Generator",
        description:"An intelligent recipe recommendation system that suggests recipes based on available ingredients. Includes filters for diet preferences and cuisine type, with step-by-step cooking instructions.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Spoonacular API"],
        image: "/assets/airecipe.jpg",
        demoLink: null,
        codeLink: "https://github.com/JaiPatel0916/smart-recipe-generator",
    },
    
];

const clientProjects = [
    {
        title: "Apna Kabadi Wala – Scrap Collection Platform",
        description:
           "A full-stack web platform designed for a local scrap collection business, enabling users to book pickups, track orders, and view collection history. The admin dashboard allows easy scrap management, order tracking, and real-time status updates.",
        tech: ["React(Vite)", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        image: "/assets/kabadiwala.png",
        demoLink: "https://apnakabadiwala.com/",
        codeLink: null,
    },
    {
        title: "Restaurant Booking System",
        description:
            "Custom booking and table management system built for a local restaurant chain to handle peak hour reservations efficiently.",
        tech: ["Next.js", "Express", "PostgreSQL"],
        image: "/images/restaurant-booking.png",
        demoLink: "#",
        codeLink: null,
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState("personal");
    const displayedProjects =
        activeTab === "personal" ? personalProjects : clientProjects;

    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-12 lg:px-24">
            {/* Section Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Featured Projects
                </h2>
                <p className="text-gray-400">
                    Explore my latest work across personal projects and client collaborations
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-10">
                <div className="bg-gray-800 rounded-xl flex p-1">
                    <button
                        onClick={() => setActiveTab("personal")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "personal"
                                ? "bg-blue-600 text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Personal Projects
                    </button>
                    <button
                        onClick={() => setActiveTab("client")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "client"
                                ? "bg-blue-600 text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Client Work
                    </button>
                </div>
            </div>

            {/* Project Cards with Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab} // re-render when tab changes
                    className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-2xl shadow-lg p-4 flex flex-col 
                         hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] 
                         transition-transform duration-300 max-w-sm mx-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative rounded-xl overflow-hidden mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-48"
                                />
                                {/* Overlay Buttons */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 bg-black/50 transition">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-auto flex gap-3">
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                                    >
                                        Live 
                                    </a>
                                )}
                                {project.codeLink && (
                                    <a
                                        href={project.codeLink}
                                        className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
