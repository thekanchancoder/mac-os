import { useState } from "react";
import Dock from "./components/Dock";
import "./App.scss";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Sportify from "./components/windows/Sportify";
import Cli from "./components/windows/Cli.jsx";
function App() {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Sportify />
      <Cli />
    </main>
  );
}

export default App;
