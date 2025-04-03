import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItem = [
        { label: "Início", href: "#home" },
        { label: "Sobre", href: "#about" },
        { label: "Projetos", href: "#projects" },
        { label: "Como Ajudar", href: "#help" },
        { label: "Blog", href: "#blog" },
        { label: "Contato", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-19">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#" className="text-[#018e5c] font-bold text-2xl">
                            AmazoniaViva
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItem.map((item) => (
                            <a
                                key={item.href}
                                className="text-gray-70  hover:text-[#018e5c] transition-colors duration-400"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                        <button
                            className="bg-[#018e5c] text-white px-4 py-2 rounded-md hover:bg-[#016d46] transition-colors duration-300"
                        >
                            Doe Agora
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-700 hover:text-[#018e5c]"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (com animação) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-md backdrop-blur-md"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuItem.map((item) => (
                                <a
                                    key={item.href}
                                    className="block px-3 py-2 text-gray-700 hover:text-[#018e5c] transition-colors"
                                    href={item.href}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button className="w-full mt-2 bg-[#018e5c] text-white px-4 py-2 rounded-md hover:bg-[#016d46] transition-colors duration-300">
                                Doe Agora
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
