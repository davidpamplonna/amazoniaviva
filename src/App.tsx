import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { NewsSection } from "./components/NewsSection"


function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <NewsSection />
    </div>
  )
}

export default App
