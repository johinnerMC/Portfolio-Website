/** @format */
import "./writingPage.css";
import { CodeHighlighter } from "./components";

export const WritingPage = () => {
  const codeString = `
  import { Data, ScrollDown, Social } from './components'
    import './home.css'


    export const Home = () => {
  return (
    <section className="home section" id="home">

}`;
  return (
    <section className="section">
      {<CodeHighlighter codeString={codeString} language="tsx" />}
      <h1>CSS</h1>
      {<CodeHighlighter codeString={codeString} language="php" />}
    </section>
  );
};
