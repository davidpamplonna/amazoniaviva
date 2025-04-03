import { button, linearGradient } from "motion/react-client";
import { FiUsers } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

export function EventsBanners() {
  const events = [
    {
      id: 1,
      title: "Seminário: Direitos Indígenas e Preservação Ambiental",
      date: "25 de Março, 2024",
      location: "Manaus, AM",
      image:
        "https://images.pexels.com/photos/13722334/pexels-photo-13722334.jpeg",
      color: "#a54340",
    },
    {
      id: 2,
      title: "Workshop de Educação Ambiental",
      date: "10 de Abril, 2024",
      location: "Belém, PA",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
      color: "#018e5c",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Próximos Eventos
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative h-70 rounded-xl overflow-hidden group"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={event.image}
                alt={event.title}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, ${event.color}00, ${event.color}ee 150%)`,
                }}
              />
              <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <IoCalendarClearOutline size={20} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <LuMapPin size={20} />
                    {event.location}
                  </div>
                  <button className="mt-4 bg-white text-gray-900 px-3 py-2 md:px-6 md:py-3 rounded-md inline-flex items-center self-start gap-2 hover:bg-gray-100 transition-colors">
                    <FiUsers size={16} />
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
