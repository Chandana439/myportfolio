import data from "../../data/index.json";
import React from "react";
import { Fade } from "react-awesome-reveal";
const Skills = () => {
  return (
    <section id="skills" className="skills--section">
      <div className="portfolio--container">
        <p className="skills--section--heading">My Expertise</p>
      </div>
      <div className="skills--section--container">
        {/* Frontend card */}
        <div className="skills--section--card">
          <h2>
            <Fade direction="up" delay={0.2} duration={800}>
              Frontend
            </Fade>
          </h2>

          <div className="skills--section--images">
            {data?.frontend?.map((item, index) => (
              <div key={index} className="skills--section--category">
                <img src={item.src} alt="infrastructure" />
                <h3 className="skills--image--title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* Backend card */}
        <div className="skills--section--card">
          <h2>
            <Fade direction="up" delay={0.2} duration={800}>
              Backend
            </Fade>
          </h2>
          <div className="skills--section--images">
            {data?.backend?.map((item, index) => (
              <div key={index} className="skills--section--category">
                <img src={item.src} alt="infrastructure" />
                <h3 className="skills--image--title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="skills--section--card">
          <h2>
            <Fade direction="up" delay={0.2} duration={800}>
              Database
            </Fade>
          </h2>
          <div className="skills--section--images">
            {data?.database?.map((item, index) => (
              <div key={index} className="skills--section--category">
                <img src={item.src} alt="infrastructure" />
                <h3 className="skills--image--title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="skills--section--card">
          <h2>
            <Fade direction="up" delay={0.2} duration={800}>
              Cloud/Deployment
            </Fade>
          </h2>

          <div className="skills--section--images">
            {data?.cloud?.map((item, index) => (
              <div key={index} className="skills--section--category">
                <img src={item.src} alt="infrastructure" />
                <h3 className="skills--image--title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="skills--section--certifications">
        <h3 className="certifications--title">CERTIFICATIONS</h3>
        {data?.certifications?.map((item, index) => (
          <div key={index} className="each--certificate">
            <ul>
              <li>
                <a href={item.src} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
