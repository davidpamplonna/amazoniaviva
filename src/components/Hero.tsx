import { LuArrowRight } from "react-icons/lu";

export function Hero() {

    return (
        <section className="relative min-h-[580px] md:min-h-[780px] ">
            <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center-center md:bg-center"
            style={{ backgroundImage: 'url("./../public/banner.png")' }}>
                <div className="absolute inset-0 bg-black opacity-45"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                <div className="max-w-3xl mt-10 md:mt-25">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Protegendo a Amazônia e seus povos</h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-8">Junte-se a nós na luta pela preservação da maior floresta tropical do mundo e pelos direitos das comunidades que a habitam</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#018e5c] text-white px-8 py-3 rounded-md hover:bg-[#016d46] flex items-center justify-center">
                    Doe Agora
                        <LuArrowRight className="ml-2 mt-1" size={20} />
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
                        Seja Voluntário
                    </button>
                </div>
            </div>
        </section>
    )

}