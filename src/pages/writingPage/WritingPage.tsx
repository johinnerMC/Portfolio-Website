/** @format */
import "./writingPage.css";
import { CodeHighlighter } from "./components";
//import styled from "styled-components";

export const WritingPage = () => {
  const codeHijoDirectos = `
<ul class="hijos-directos">
      <li><b>Primavera</b></li>
      <li><b>Verano</b></li>
      <li><b>Otoño</b></li>
</ul>`;
  return (
    <section className="section">
      <h2 className="section__title">Aprendiendo CSS</h2>
      <span className="section__subtitle">Cascading Style Sheets</span>

      <article className="writing__content">
        <h3 className="article__title">Selectores hijos</h3>
        <span className="article__subtitle">Hijos directos</span>
        <p className="article__description">
          El selector Estila el elemento en primer nivel dentro de su clase
          seleccionada
        </p>

        {<CodeHighlighter codeString={codeHijoDirectos} language="html" />}
      </article>
    </section>
  );
};
