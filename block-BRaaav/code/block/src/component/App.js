import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import Blog  from "../component/Blog";
import Work from "../component/Work";
import Contect from "../component/Contect";
import Footer from "../component/Footer";
const App= ()=>{
    return (
        <>
          <Header/>
          <main>

            <Hero/>
            <About/>
            <Blog/>
            <Work/>
            <Contect/>
          </main>
          <footer>
            <Footer/>
          </footer>
        </>
      
    )
}

export default App;