import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";


export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const menuItem = [
        {label: 'Início', href: '#home'},
        {label: 'Sobre', href: '#about'},
        {label: 'Projetos', href: '#projects'},
        {label: 'Como Ajudar', href: '#help'},
        {label: 'Blog', href: '#blog'},
        {label: 'Contato', href: '#contact'},
    ];

    return (
        
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* inicio do esqueleto */}
                    <div className="flex items-center">
                        <a href="#" className="text-[#018e5c] font-bold text-2xl">AmazoniaViva</a>
                    </div>
                    {/* desktop */}
                    <div className="hidden md:flex items-center space-x-8">                    
                        {menuItem.map((item) => (
                            <a 
                            className="text-gray-700 hover:text-[#018e5c] transition-colors duration-300"
                            href={item.href}
                            >{item.label}</a>
                        ))}
                        <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-[#018e5c] text-white px-4 py-2 rounded-md hover:bg-[#016d46] transition-colors duration-300 ">Doe Agora</button>
                    </div>
                    {/* menu mobile button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-700 hover:text-[#018e5c]">
                            {isOpen ? <IoClose size={26} />  : <IoMenu size={26} />
                            }
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                        {menuItem.map((item) => (
                            <a 
                            className="block px-3 py-2 text-gray-700 hover:text-[#018e5c] transition-colors"
                            href={item.href}
                            key={item.href}
                            >{item.label}</a>
                        ))}
                        <button>Doe Agora</button>
                    </div>
                </div>
           
            )}
        </nav>
    )
}