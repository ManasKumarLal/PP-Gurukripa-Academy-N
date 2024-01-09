import './App.css'
import { Header, Navbar, LandingPage, CardsPage, Academic, Footer, Services } from './components/Index'
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
      <Services/>
      <Footer/>
    </>
  )
}

export default App
