import './App.css'
import { About, Header, Home, Qualification, Services, Skills, Testimonials } from './components'

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
    </main>
  </>
  )
}

export default App
