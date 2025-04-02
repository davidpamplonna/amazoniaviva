import { Hero } from "./components/Hero"
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
    </div>
  )
}

export default App
