import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./compoments/Navbar/Navbar";
import PriceList from "./compoments/PriceList/PriceList";
import Dashboard from "./compoments/Dashboard/Dashboard";
import PhoneBar from "./compoments/PhoneBar/PhoneBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600">Hello from tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
