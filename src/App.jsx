import './App.css'
import { Header, Navbar, LandingPage, CardsPage, Academic, Footer, Services, Slider, Specialists } from './components/Index'
import About from './components/pages/about/About'

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <LandingPage />
      <CardsPage />
      <About />
      <Academic />
      <Services />
      <Slider />
      <Specialists />
      <Footer />
    </>
  )
}

export default App
