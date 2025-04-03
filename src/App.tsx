import { EventsBanners } from "./components/EventsBanners"
import { Hero } from "./components/Hero"
import { ImpactSection } from "./components/ImpactSection"
import { Navbar } from "./components/Navbar"
import { NewsSection } from "./components/NewsSection"
import { ProjectSection } from "./components/ProjectSection"
import { VideoSection } from "./components/VideoSection"


function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <NewsSection />
      <ProjectSection />
      <VideoSection />
      <EventsBanners />
      <ImpactSection />
    </div>
  )
}

export default App
