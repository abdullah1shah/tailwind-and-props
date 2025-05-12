import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <div>
        <Card name="Abdullah" />
        <Card name="Shah" />
        <Card name="Frontend" />
        <Card name="Developer" />
      </div>
    </>
  );
}

export default App;
