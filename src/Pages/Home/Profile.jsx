import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Slide, Fade } from "react-awesome-reveal";
const Profile = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Software Engineer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  const handleResume = () => {
    window.open("./documents/CHANDANA_G.pdf", "_blank");
  };
  return (
    <section id="profile" className="profile-sec">
      <div className="profile-sec-img">
        <img src="./assests/ch-profile-img.png" alt="Profile Section" />
      </div>
      <div className="profile-sec-content-box">
        <div className="profile-sec-content">
          <p className="section-title">
            Hello!
            <br />
            I'm Chandana
            <span className="emoji">
              <br />
              &#128075;&#127995;
            </span>
          </p>
          <h1 className="profile-sec-role">
            <span className="profile-sec-role-color">{text}</span>
            <Cursor />
            <br />
          </h1>
          <p className="profile-sec-description">
            Passionate Full Stack Developer with a Master’s in Computer Science
            and a strong foundation in building scalable applications,
            optimizing workflows, and enhancing system performance. Skilled in
            developing seamless user experiences, automating CI/CD pipelines,
            and leveraging cloud technologies to drive efficiency.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button className="btn btn-primary" onClick={handleResume}>
            Resume
          </button>
          <div>
            <a
              href="https://www.linkedin.com/in/chandana-ganesu-b5aa60287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="navbar--img"
                src="./social/linkedin-icon.png"
                alt="linkedin icon"
              />
            </a>
            <a
              href="https://github.com/Chandana439"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="navbar--img"
                src="./social/github-icon.png"
                alt="github icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

{
  /*Always
eager to innovate, streamline development processes, and bridge
the gap between front-end and back-end systems to deliver
high-quality solutions.*/
}
