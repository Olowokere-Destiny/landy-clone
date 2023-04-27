import React, { useEffect, useState} from "react";
import './App.css';
import ScrollReveal from "scrollreveal";
import Section1  from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import FormDesc from "./form-desc";
import Form from "./form";
import Footer from "./footer";
import SideBar from "./sidebar";

function App() {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".sec-1", {
      delay: 400,
      origin: "right",
      distance: "50%",
      easing: "ease-out",
      reset: true
    })
    sr.reveal(".sec-2", {
      delay: 400,
      duration: 1000,
      origin: "bottom",
      distance: "50%",
      easing: "ease-out",
      reset: true
    })
    sr.reveal(".sec-3", {
      delay: 400,
      origin: "left",
      distance: "50%",
      easing: "ease-out",
      reset: true
    })
    sr.reveal(".sec-4", {
      delay: 400,
      origin: "right",
      distance: "50%",
      easing: "ease-out",
      reset: true
    })
    sr.reveal(".sec-5", {
      delay: 400,
      origin: "left",
      distance: "50%",
      easing: "ease-out",
      reset: true
    })
    sr.reveal(".sec-6", {
      delay: 400,
      origin: "left",
      distance: "50%",
      easing: "ease-out",
      reset: true
    })

    sr.reveal(".form", {
      delay: 400,
      origin: "right",
      distance: "50%",
      easing: "ease-out",
      reset: true
    })
  }, [])

  const [state, setState] = useState({isOpen: false})

  function toggleMenu() {
    setState(prevState => {
      return {...prevState, isOpen: !prevState.isOpen}
    })
  }
  const overflow = state.isOpen ? "hidden" : "auto";
  document.body.style.overflow = overflow;
  const bgAsh = state.isOpen && "#bbb";

  return (
    <div className="App" style={{backgroundColor: bgAsh}}>

      <SideBar state={state.isOpen} toggle={toggleMenu}/>
      <header>
        <div className="heading">
          <h1>Landy</h1>
          <div className="navs">
            <h2>About</h2>
            <h2>Mission</h2>
            <h2>Product</h2>
            <div className="cont"><p>Contact</p></div>
          </div>
        </div>
      </header>

      <section className="sec-1">
        <Section1 />
      </section>

      <section className="sec-2">
        <Section2 />
      </section>

      <section className="sec-3">
        <Section3 />
      </section>

      <section className="sec-4">
        <Section4 />
      </section>

      <section className="sec-5">
        <Section5 />
      </section>

      <section className="contacts-div">
        <div className="sec-6">
          <FormDesc />
        </div>
        <div className="form">
          <Form />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
