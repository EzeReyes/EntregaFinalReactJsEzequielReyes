// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";


// PAGES
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import CardDetail from "./components/pages/CardDetail/CardDetail";
import FinishBuy from "./components/pages/Finish/FinishBuy";
import Cart from "./components/pages/Cart/Cart";
import Error from "./components/pages/Error/Error";


// COMPONENTS
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ItemsProvider } from "./itemContext";
import { ItemsCartProvider } from "./cartContext";
import Productos from "./components/pages/Productos/Productos";


function App() {
  return (
    <ItemsProvider>
      <ItemsCartProvider>
        <BrowserRouter>    
      <div className="App-Body">
        <Header/>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<CardDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/FinishBuy" element={<FinishBuy/>}/>
        <Route path="/productos/:tipo" element={<Productos/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    </ItemsCartProvider>
    </ItemsProvider>
  );
}

export default App;
