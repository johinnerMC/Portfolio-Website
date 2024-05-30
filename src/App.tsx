/** @format */

import "./App.css";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Qualification,
  Scrollup,
  Skills,
  Work,
} from "./components";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services/> */}
        <Qualification />
        <Work />
        {/* <Testimonials/> */}
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
