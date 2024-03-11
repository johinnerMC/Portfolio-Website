import './App.css'
import { About, Header, Home, Services, Skills } from './components'

function App() {
 
  return (
  <>
    <Header/>
    
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
    </main>
  </>
  )
}

export default App
