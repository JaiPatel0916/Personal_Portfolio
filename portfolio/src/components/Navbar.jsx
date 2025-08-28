import { useState } from "react";
import { FaHome, FaUser, FaCode, FaBoxOpen, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", icon: <FaHome />, href: "#home" },
        { name: "About", icon: <FaUser />, href: "#about" },
        { name: "Experience", icon: <FaCode />, href: "#experience" },
        { name: "Projects", icon: <FaBoxOpen />, href: "#projects" },
        { name: "Contact", icon: <FaEnvelope />, href: "#contact" },
    ];

    const handleLinkClick = (name) => {
        setActive(name);
        setIsOpen(false); // Close mobile menu on click
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

                {/* Logo */}
                <div className="text-white text-xl font-bold relative">
                    <span className="relative">
                        Jai Patel
                        <span className="absolute inset-0 blur-md bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 -z-10"></span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-white">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => handleLinkClick(link.name)}
                                className="flex items-center gap-1 hover:text-blue-400 transition relative"
                            >
                                {link.icon}
                                {link.name}
                                {active === link.name && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-2xl focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg border-t border-gray-800">
                    <ul className="flex flex-col items-center py-4 gap-4 text-white">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.name)}
                                    className="flex items-center gap-2 text-lg hover:text-blue-400 transition"
                                >
                                    {link.icon}
                                    {link.name}
                                    {active === link.name && (
                                        <span className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
