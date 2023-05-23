import { useState } from "react";
import { Header } from "./components/Header";
import './global.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      Um dia vai chegar o dia
    </>
  );
}

export default App;
