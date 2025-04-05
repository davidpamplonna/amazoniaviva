import { ContactSection } from "./components/ContactSection"
import { EventsBanners } from "./components/EventsBanners"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { ImpactSection } from "./components/ImpactSection"
import { Navbar } from "./components/Navbar"
import { NewsLetterSection } from "./components/NewsLetterSection"
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
      <NewsLetterSection />
     <ContactSection />
     <Footer />
    </div>
  )
}

export default App
