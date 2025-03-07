import React from "react";
import data from "../../data/index.json";
import { Bounce } from "react-awesome-reveal";
const Portfolio = () => {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
          <p className="sub--title">Projects</p>
          <Bounce>
            <h2 className="section--heading">What I have done?</h2>
          </Bounce>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="portfolio--link">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Live View
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
