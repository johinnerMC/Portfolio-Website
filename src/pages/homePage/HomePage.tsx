/** @format */

import {
  About,
  Contact,
  Home,
  Qualification,
  Skills,
  Work,
} from "./components";

export const HomePage = () => {
  return (
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
  );
};
