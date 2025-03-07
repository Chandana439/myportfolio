import React from "react";
import Profile from "../Profile";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

const index = () => {
  return (
    <div>
      <Profile />
      <Skills />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default index;
