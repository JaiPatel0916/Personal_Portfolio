import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    
    FaGitAlt,
    FaFire,
} from "react-icons/fa";
import {
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiGithub,
    SiCloudinary,
} from "react-icons/si";

// Skills Array
const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-5xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-5xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-5xl" /> },
   
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-300 text-5xl" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400 text-5xl" /> },
    { name: "Firebase", icon: <FaFire className="text-yellow-400 text-5xl" /> },
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="relative w-full py-20 px-6 md:px-20 text-white">
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                    My Tech{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Arsenal
                    </span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    A showcase of the skills and tools driving my work
                </p>
            </div>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Tilt
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={400}
                            className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700 shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.12,
                                    rotate: 2,
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center justify-center"
                            >
                                {skill.icon}
                                <p className="mt-4 text-sm md:text-base font-medium">{skill.name}</p>
                            </motion.div>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
