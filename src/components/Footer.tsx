import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram, FaLeaf } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuChevronRight, LuFacebook } from "react-icons/lu";



const FooterLinks = {
    institucional: [
        { label: 'Sobre Nós', href: '#' },
        { label: 'Nossa Equipe', href: '#' },
        { label: 'Parceiros', href: '#' },
        { label: 'Relatórios Anuais', href: '#' },
        { label: 'Prestação de Contas', href: '#' }
      ],

      projetos: [
        { label: 'Proteção Territorial', href: '#' },
        { label: 'Reflorestamento', href: '#' },
        { label: 'Educação Ambiental', href: '#' },
        { label: 'Pesquisa Científica', href: '#' },
        { label: 'Desenvolvimento Sustentável', href: '#' }

      ],

      comoAjudar: [
        { label: 'Faça uma Doação', href: '#' },
        { label: 'Seja Voluntário', href: '#' },
        { label: 'Empresas Parceiras', href: '#' },
        { label: 'Divulgue Nosso Trabalho', href: '#' }
      ],

       socialLinks: [
          {icon:<LuFacebook  size={24} />, href: "#", label: "Facebook"},
          {icon:<FaInstagram size={24} />, href: "#", label: "Instagram"},
          {icon:<FiTwitter  size={24} />, href: "#", label: "Twitter"},
          {icon:<AiOutlineYoutube  size={24} />, href: "#", label: "YouTube"},
      ]

    };



export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* main content */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
                    <div className="lg:col-span-2">
                        {/* logo description */}
                        <div className="flex items-center space-x-2 text-3xl font-bold text-white mb-4">
                            <FaLeaf className="w-8 h-8 text-[#01b474]" />
                            <span className="text-[#01b474]">AmazoniaViva</span>
                        </div>
                        <p className="text-gray-400 mb-6">Trabalhando incansavelmente pela preservação da Amazônia e o bem-estar de suas comunidades através de ações sustentáveis e educação ambiental.</p>
                    </div>
                    {/* acesso rapido */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Institucional</h3>
                        <ul className="space-y-2">
                            {FooterLinks.institucional.map((link) => (
                                <li 
                                key={link.label}>
                                    <a href={link.href} className="flex items-center group gap-2 text-gray-400 hover:text-[#01da8c] transition-colors">
                                        <LuChevronRight />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* links projetos */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Projetos</h3>
                        <ul className="space-y-2">
                            {FooterLinks.projetos.map((link) => (

                                <li key={link.label}>
                                    <a 
                                    className="flex items-center group gap-2 text-gray-400 hover:text-[#01da8c] transition-colors"
                                    href={link.href}>
                                        <LuChevronRight />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* links como ajudar */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Como Ajudar</h3>
                        <ul className="space-y-2">
                            {FooterLinks.comoAjudar.map((link) => (

                                <li key={link.label}>
                                    <a href={link.href} className="flex items-center group gap-2 text-gray-400 hover:text-[#01da8c] transition-colors">
                                        <LuChevronRight />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>    
                </div>
                 {/* certification banner e redes sociais */}
                <div className="border-t border-gray-700 py-8 mt-10">
                    <div className="flex flex-col items-center md:flex-row justify-between gap-4">
                        <div className="flex items-center space-x-2 ">
                            <FaLeaf size={20} className="text-[#01da8c]" />
                            <p className="text-sm text-gray-400">Organização certificada em transparência e impact social</p>
                        </div>
                        <div className="flex flex-col items-center md:items-center space-y-2">
                           <span className="text-lg font-semibold text-gray-300">Redes Sociais</span>
                           <div className="flex space-x-4 mt-2">
                            {FooterLinks.socialLinks.map((link) => (
                                    <a key={link.label} href={link.href} className="text-gray-400 hover:text-[#01da8c] transition-colors">
                                        {link.icon}
                                    </a>
                                ))}
                           </div>
                        </div>
                    </div>
                </div>
                  {/* Copyright */}
                  <div className="border-t border-gray-700 py-4 mt-10 flex flex-col md:flex-row justify-between items-center space-y-4">
                        <p className="text-sm text-gray-400">© 2025 AmazoniaViva. Todos os direitos reservados</p>
                    <div className="flex space-x-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-[#01da8c] transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-[#01da8c] transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-[#01da8c] transition-colors">Cookies</a>
                    </div>
                  </div>
            </div>
        </footer>
    )
}