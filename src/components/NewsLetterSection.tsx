import { IoIosSend } from "react-icons/io";


export function NewsLetterSection() {

    return(
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 lg:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Fique por dentro das nossas ações</h2>
                            <p className="text-md md:text-lg text-gray-600 mb-5">Receba atualizações sobre nosso projetos, campanhas e como você pode ajudar a proteger a Amazônia</p>
                            <form className="space-y-4">
                                <div>
                                    <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    htmlFor="name">
                                        Nome
                                    </label>
                                    <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                                    focus:ring-2
                                    focus:ring-[#018e5c] focus:border-transparent transition-colors duration-400"
                                    type="text"
                                    id="name"
                                    placeholder="Seu nome completo"
                                    />
                                </div>
                                <div>
                                    <label 
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    htmlFor="email">
                                        E-mail
                                    </label>
                                    <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                                    focus:ring-2
                                    focus:ring-[#018e5c] focus:border-transparent transition-colors duration-400"
                                    type="email"
                                    id="email"
                                    placeholder="Seu e-mail"
                                    />
                                </div>
                                <button
                                className="w-full bg-[#018e5c] flex items-center justify-center py-3 px-6 rounded-lg text-white hover:bg-[#016d46] transition-colors duration-400 gap-2"
                                type="submit">
                                    Inscreva-se
                                    <IoIosSend size={16} />
                                </button>
                            </form>
                        </div>
                        <div 
                        className="hidden lg:block relative"
                        style={{backgroundImage: 'url(https://images.pexels.com/photos/31422622/pexels-photo-31422622/free-photo-of-araras-coloridas-escarlates-e-azuis-e-amarelas-empoleiradas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                        }}>
                            <div className="absolute inset-0 bg-[#018e5c]/8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}