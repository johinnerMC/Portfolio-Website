/** @format */

import "./App.css";
import { AppLayout } from "./layout/AppLayout";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <AppLayout>
        <HomePage />
      </AppLayout>
    </>
  );
}

export default App;
