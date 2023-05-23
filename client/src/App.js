import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Pagebar from "./components/Pagebar";
import Header from "./components/Header";
import Youshi from "./components/Youshi";
import Fusen from "./components/Fusen";
import Wallet from "./components/Wallet";

function App() {
  return (
      <div className="App">
        <Header />
        <Pagebar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Youshi" element={<Youshi />} />
        <Route path="/Fusen" element={<Fusen />} />
        <Route path="/Wallet" element={<Wallet />} />
        </Routes>
      </div>
  );
}

export default App;
