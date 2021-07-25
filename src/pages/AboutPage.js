import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className="about-me">
        <p>
          Hello friends! I am Ocean Nguyen. Currently, I'm working at an
          untitled large tech company as software engineer. I love solving
          problems and developing myself that broaden my horizon about thousands
          of thing around the world.
        </p><br/>
        <p>
          This blog tries to intersect not only Day in a life of me as a
          software engineer but also Entertainment and Media.
        </p><br/>
        <p>
          Hopefully, it would be good for you. Feel free to give me feedback.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;