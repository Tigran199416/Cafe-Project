import React, { useEffect,useState } from "react";
import './App.css';
import Header from "./Header/header";
import Home from "./Home/home";
import About from "./About/about";
import Chef from "./Chefs/chef";
import Footer from "./Footer/footer";
import Contact from "./Contact/contact";
import Menu from  "./Menu/menu"
import Eat from "./EatMenu/eat"
import Container from '@material-ui/core/Container';
import { BrowserRouter } from "react-router-dom";
import Loader from "./loader/loader";


function App() {

  const [loading,setLoading] = useState(false)

  useEffect(() =>{
  setInterval(()=>{setLoading(true)},5000)
  },[loading])
 
 
  if(loading){
return(
  <>
  <BrowserRouter>
<Header/>
  <Container  maxWidth = "lg" >
    <Home />
    <About/>
    <Chef/>
    <Contact/>
    <Menu/>
    <Eat/>
    
    </Container>   
<Footer/>
</BrowserRouter>

</>
    )}else{
      return (
        <Loader/>
      )
    }
}

export default App;
