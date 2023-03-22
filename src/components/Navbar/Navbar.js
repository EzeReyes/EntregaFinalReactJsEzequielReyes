import { useContext } from "react";
import { cartContext } from "../../cartContext";
import ElementsNavbar from "./ElementsNavbar";
import CartWidget from "./CartWidget";
import "./Navbar.css"
const logoImage = <img className="Img" src="https://dnp4fok4drjmm.cloudfront.net/pages/altagama/715_c1e324db69601a300f8cc33bc9357352.png" alt="logo"/>;



const Navbar = () => {

  let { counterCart } = useContext(cartContext);


  return (
    <>
      <div className="nav">
      <ElementsNavbar
          title={logoImage}
          to="/"
/>
          <ElementsNavbar
            title="ABOUT"
            to="/about"
/>
          <ElementsNavbar
            title="CONTACT"
            to="/contact"
          />
          <ElementsNavbar  
          title= {<CartWidget/>}
          CantidadEnCarrito={counterCart}
          to="/cart"
          />     
          </div>
          </>
  );
};

export default Navbar;
