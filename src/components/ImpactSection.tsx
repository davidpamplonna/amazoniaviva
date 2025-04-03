import { div } from "motion/react-client"
import { LuSprout, LuTreePine } from "react-icons/lu"
import { TbShieldCheck, TbUsers } from "react-icons/tb"


export function ImpactSection() {

    const impactStats = [
        {
            icon: <LuTreePine  className="w-8 h-8" />,
            value: '100mil',
            label: 'Hectares Protegidos',
            description: 'Área de floresta preservada'
          },
          {
            icon: <TbUsers  className="w-8 h-8" />,
            value: '50+',
            label: 'Comunidades',
            description: 'Comunidades indígenas apoiadas'
          },
          {
            icon: <TbShieldCheck  className="w-8 h-8" />,
            value: '25',
            label: 'Projetos Ativos',
            description: 'Iniciativas em andamento'
          },
          {
            icon: <LuSprout  className="w-8 h-8" />,
            value: '1M+',
            label: 'Árvores Plantadas',
            description: 'Reflorestamento realizado'
          }
    ]
    
    
    return (

        <section className="bg-[#018e5c] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-white font-bold text-3xl md:text-4xl text-center mb-4">Nosso Impacto</h2>
                    <p className="text-md md:text-lg text-center text-white/80">Juntos estamos fazendo a diferença na Amazônia</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {impactStats.map((stat, index) => (
                        <div key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white/70">
                                {stat.icon}
                            </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2">{stat.value}</h3>
                                <p className="text-md md:text-xl text-white font-semibold mb-2">{stat.label}</p>
                                <p className="text-white/80">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )

}