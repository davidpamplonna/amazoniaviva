import { TiArrowRight } from "react-icons/ti"
import { NewsItem } from "../type"
import { LuTag } from "react-icons/lu"
import { IoCalendarClearOutline } from "react-icons/io5"

export function NewsSection() {

    const latesNews: NewsItem [] = [
        {
            id: 1,
            title: 'Nova área de preservação é criada no coração da Amazônia',
            excerpt: 'Iniciativa protegerá mais de 100 mil hectares de floresta nativa e diversas espécies ameaçadas.',
            date: '2024-03-15',
            image: 'https://images.pexels.com/photos/27038079/pexels-photo-27038079/free-photo-of-natureza-arvore-animais-bichos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Preservação'
          },
          {
            id: 2,
            title: 'Educação que Atravessa Florestas e Fortalece Culturas',
            excerpt: 'Após anos de luta, território ancestral é finalmente demarcado e reconhecido oficialmente.',
            date: '2024-03-14',
            image: 'https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Educação'
          },
          {
            id: 3,
            title: 'Projeto de reflorestamento atinge marca histórica',
            excerpt: 'Mais de 1 milhão de árvores plantadas em áreas degradadas da Amazônia.',
            date: '2024-03-13',
            image: 'https://images.pexels.com/photos/19951274/pexels-photo-19951274/free-photo-of-natureza-maos-terra-floresta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Reflorestamento'
          }

    ]


    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div className="max-w-2xl w-[207px] md:w-full">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">Últimas Notícias</h2>
                        <p className="text-gray-600 text-sm md:text-base">Acompanhe as últimas atualizações sobre nossa causa</p>
                    </div>
                    <a href="#" className="text-sm items-center md:text-base bg-[#018e5c]/10 text-[#018e5c] px-6 py-3  rounded-full hover:bg-[#018e5c]/20 transition-colors flex font-medium  duration-400 ">
                        Ver todas
                        <TiArrowRight className="ml-1 md: md:mt-1" size={26} />
                        </a>
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latesNews.map((item) => (
                        <article 
                        className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100"
                        key={item.id}>
                            <div className="relative">
                                <img 
                                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-400"
                                src={item.image} alt={item.title} />
                                <div className="absolute top-2 left-4">
                                    <span className="inline-flex items-center px-2 py-1 bg-white/90 rounded-full text-sm font-medium text-[#018e5c]">
                                        <LuTag className="mr-1" size={15} />
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <IoCalendarClearOutline size={16} className="mr-2" />
                                    {new Date(item.date).toLocaleDateString('pt-BR')}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#018e5c] transition-colors duration-400 ">{item.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                                <a href="#" className="flex items-center text-[#018e5c] font-medium ">
                                    Leia mais
                                    <TiArrowRight className="ml-2 mt-1 transform group-hover:translate-x-1 transition-transform duration-300" size={22} />
                                    </a>
                            </div>
                        </article>
                        
                    ))}
                </div>
            </div>
        </section>
    )
}

