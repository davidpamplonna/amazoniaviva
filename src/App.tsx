import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { NewsSection } from "./components/NewsSection"
import { ProjectSection } from "./components/ProjectSection"


function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <NewsSection />
      <ProjectSection />
    </div>
  )
}

export default App
