import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { LuFacebook, LuMapPin, LuPhone } from "react-icons/lu";

const socialLinks = [
    {icon:<LuFacebook  size={24} />, href: "#", label: "Facebook"},
    {icon:<FaInstagram size={24} />, href: "#", label: "Instagram"},
    {icon:<FiTwitter  size={24} />, href: "#", label: "Twitter"},
    {icon:<AiOutlineYoutube  size={24} />, href: "#", label: "YouTube"},
]




export function ContactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Entre em contato</h2>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                <IoMailOutline size={26}  className=" text-[#018e5c]" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">E-mail</h3>
                                    <p className="text-gray-600">contato@amazoniaviva.org.com.br</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <LuPhone size={26}  className="text-[#018e5c]" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
                                    <p className="text-gray-600">(99) 99999-9999</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                <LuMapPin size={26} className=" text-[#018e5c]" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                                    <p className="text-gray-600">Av. Principal, 123 - Centro</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Siga-nos</h3>
                            <div className="flex space-x-4">
                               {socialLinks.map((social, index) => (
                                <a 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#018e5c] hover:text-white transition-colors"
                                key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                    {social.icon}
                                </a>
                               ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="bg-gray-50 p-8 rounded-xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                        <label 
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                        htmlFor="firsName">Nome</label>
                                        <input
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#018e5c] focus:border-transparent transition-all focus:outline-none"
                                        type="text" id="firsName" placeholder="Digite seu nome" />
                                </div>
                                <div>
                                    <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    htmlFor="lastname">Sobrenome</label>
                                    <input 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018e5c] focus:border-transparent transition-all" 
                                    type="text" id="lastname" placeholder="Digite seu sobrenome" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="
                                email">E-mail</label>
                                <input 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018e5c] focus:border-transparent transition-all"
                                type="email" id="email" placeholder="seu@email.com" />
                            </div>
                            <div className="mb-6 mt-4">
                                <label 
                                className="block text-sm font-medium text-gray-700 mb-1"
                                htmlFor="subject">Assunto</label>
                                <select 
                                className="w-full px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018e5c] focus:border-transparent transition-all"
                                name="subject" id="subjet">
                                    <option value="">Selecione um assunto</option>
                                    <option value="donation">Doações</option>
                                    <option value="volunteer">Coluntariado</option>
                                    <option value="partnership">Parcerias</option>
                                    <option value="press">Imprensa</option>
                                    <option value="other">Outros</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label 
                                className="block text-sm font-medium text-gray-700 mb-1"
                                htmlFor="messager">Mensagem</label>
                                <textarea
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018e5c] focus:border-transparent transition-all resize-none"
                                name="message" id="message" placeholder="Digite sua mensagem aqui..."></textarea>
                            </div>
                            <button className="w-full bg-[#018e5c] text-white px-6 py-3 rounded-lg hover:bg-[#017a4b] transition-colors flex items-center justify-center space-x-2">
                                <span>Enviar Mensagem</span>
                                <IoIosSend className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}