import './App.css'
import { About, Header, Home, Skills } from './components'

function App() {
 
  return (
  <>
    <Header/>
    
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
    </main>
  </>
  )
}

export default App
