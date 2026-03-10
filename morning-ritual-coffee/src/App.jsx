import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <About />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

export default App
