import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);
  const [formCard, setFormCard] = useState("login");

  return (
    <>
      <Login formCard={formCard} setFormCard={setFormCard} />
    </>
  );
}

export default App;
