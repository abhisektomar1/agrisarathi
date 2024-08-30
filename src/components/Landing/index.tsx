import React from "react";
import Header from "../Header";
import Services from "../Services";
import Blog from "../Blog";
import Contact from "../Contact";
import Footer from "../Footer";

function Landing() {
  return (
    <div className="w-full h-full flex flex-col relative box-border">
      <Header />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
