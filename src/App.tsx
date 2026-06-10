import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}
