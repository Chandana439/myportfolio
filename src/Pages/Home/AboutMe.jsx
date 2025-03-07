import React from "react";
import { Slide } from "react-awesome-reveal";
const AboutMe = () => {
  return (
    <section id="about" className="about--section">
      <div className="about-sec-content">
        <Slide direction="down" duration={1800}>
          <h1 className="about--section--heading">About Me</h1>
        </Slide>

        <Slide direction="left" duration={1500}>
          <p className="about-sec-description">
            As a Full Stack Developer, I thrive on building scalable and
            efficient applications that deliver seamless user experiences. I
            enjoy transforming ideas into functional solutions, solving complex
            problems, and optimizing systems for performance and accessibility.
          </p>
          <p className="about-sec-description">
            From designing intuitive UI to implementing robust backend
            architecture, my goal is to create an efficient and engaging
            experience for all users. I am currently working as a Full Stack
            Developer at PNC. I am also a recent graduate with a Master’s degree
            in Computer Science.
          </p>
          <p className="about-sec-description">
            Beyond coding, I enjoy exploring new tech, automating workflows,
            streamlining CI/CD pipelines, and continuously learning new
            advancements. Every challenge is an opportunity to innovate, and I’m
            always excited to collaborate and bring ideas to life. I’d love to
            hear from you :)
          </p>
        </Slide>
      </div>

      <div className="about--section--img">
        <img src="./assests/ch-about-img.png" alt="about image" />
      </div>
    </section>
  );
};

export default AboutMe;
