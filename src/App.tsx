import './App.css'
import { About, Contact, Header, Home, Qualification, Services, Skills, Testimonials } from './components'

function App() {
 
  return (
  <>
    <Header/>
    
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Testimonials/>
      <Contact/>
    </main>
  </>
  )
}

export default App
