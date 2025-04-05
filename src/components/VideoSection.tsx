import { FaPlay } from "react-icons/fa";


export function VideoSection() {

    return(
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Vídeos em Destaque</h2>
                 {/* video de destaque */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden" data-aos="fade-up-right">
                        <iframe src="https://www.youtube.com/embed/your-video-id"
                        title="Vídeo em destaque"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                    {/* videos secundarios */}
                    <div className="space-y-4" data-aos="fade-up-left">
                        {[1,2,3].map((index) =>(
                            <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm" >
                                <div className="relative flex-shirink-0 w-40 aspect-video bg-gray-900 rounded overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPlay  className="text-white" size={26}/>
                                    </div>
                                </div>
                                <div></div>
                                <div className="max-w-sm ">
                                    <h3 className="text-semibold text-gray-900 mb-1">Titulo do Vídeo	{index}</h3>
                                    <p className="text-sm text-gray-600">Breve descrição do conteúdo do vídeo e sua relevância para nossa causa</p>
                                </div>
                                
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}