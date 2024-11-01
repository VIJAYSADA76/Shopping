import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUS from "./AboutUs";
import ContactUs from "./ContactUS";
import './App.css';
import { useSelector } from "react-redux";
import { FaCarrot, FaDrumstickBite, FaHistory, FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from "react-icons/fa";
import {  GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";


function App() {

  const cart=useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  return (
    <>
    
    <GoogleOAuthProvider clientId="924503179000-rtb6vbpk6su0s7dpfnt0jk87ln8lj85q.apps.googleusercontent.com">
    <GoogleLoginComponent/>
    </GoogleOAuthProvider>
      <BrowserRouter>
      
      <nav>
      <Link to="/home"><FaHome/>Home</Link>
      <Link to="/veg"><FaCarrot/>Veg</Link>
        <Link to="/nonveg"><FaDrumstickBite/>NonVeg</Link>
        <Link to="/cart"><FaShoppingCart/>Cart ({totalItems})</Link>
        <Link to="/purchasehistory"><FaHistory/>PurchaseHistory</Link>
        <Link to="/aboutus"><FaInfoCircle/>AboutUS</Link>
        <Link to="/contactus"><FaPhone/>ContactUS</Link>
        
        </nav>
       
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contactus" element={<ContactUs />} />


        </Routes>
      </BrowserRouter>
      
      
    </>
  );
};
export default App;