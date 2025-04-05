import { FaLeaf } from "react-icons/fa"
import { Project } from "../type"
import { MdOutlineShield } from "react-icons/md";
import { LuArrowRight, LuUsersRound } from "react-icons/lu";


const projects: Project[] = [
    {
        id: 1,
        title: 'Proteção de Territórios Indígenas',
        category: 'indigenous-rights',
        description: 'Apoio legal para comunidades indígenas na defesa de seus territórios ancestrais.',
        image: 'https://images.pexels.com/photos/20079871/pexels-photo-20079871/free-photo-of-pessoas-em-trajes-tradicionais-com-plumas-caminhando-na-rua-e-tocando-instrumentos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 2,
        title: 'Reflorestamento Participativo',
        category: 'reforestation',
        description: 'Iniciativa de plantio de árvores nativas em parceria com comunidades locais.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 3,
        title: 'Monitoramento da Biodiversidade',
        category: 'wildlife-protection',
        description: 'Programa de pesquisa e proteção de espécies ameaçadas da Amazônia.',
        image: 'https://images.pexels.com/photos/15573637/pexels-photo-15573637/free-photo-of-panorama-vista-paisagem-pessoas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
]

const CategoryIcon = ({ category }: { category: Project['category'] }) => {
    switch (category) {
        case 'indigenous-rights':
            return <LuUsersRound  className="w-6 h-6"/>;
        case 'reforestation':
            return <FaLeaf  className="w-6 h-6"/>;
        case 'wildlife-protection':
            return <MdOutlineShield   className="w-6 h-6"/>;
    }
}


export function ProjectSection() {
    
    return (
        <section className="py-6 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Projetos</h2>
                    <p className=" text-gray-700 text-sm md:text-lg">Conheça as iniciativas que estão transformando a realidade da Amazônia e de seus povos</p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                className="w-full h-full object-cover tranform group-hover:scale-105 transition-transform duration-500"
                                src={project.image} alt={project.title} />
                            </div>
                            <div className="absolute top-4 left-4" >
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[#018e5c] shadow-lg">
                                    <CategoryIcon category={project.category}/>
                                </div>
                            </div>
                            <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#018e5c] transition-colors duration-500">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                                    <a href="#"
                                    className="flex items-center text-[#018e5c] font-medium group-hover:[#018e5c] transition-colors duration-500"
                                    >Saiba mais
                                    <LuArrowRight className="ml-2 mt-1 tranform group-hover:translate-x-1 transition-transform transition-colors duration-500" size={16} />
                                    </a>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>



    )
}