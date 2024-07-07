import "./About.scss"; // Assuming you are importing a CSS or SCSS file
import Techstack from "./Techstact";

const About = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="wrapper">
          <div className="textContainer">
            <h1>Web developer and UI designer</h1>
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am{" "}
              <span className="purple">Soumyajit Behera </span>
              from <span className="purple"> Bhubaneswar, India.</span>
              <br />
              I am currently employed as a software developer at Juspay.
              <br />
              I have completed Integrated MSc (IMSc) in Maths and Computing at
              BIT Mesra.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
          </div>
        </div>
        <div className="imageContainer">
          <img src="./images/about.png" alt="" />
        </div>
      </div>
      <div>
        <Techstack />
      </div>
    </div>
  );
};

export default About;
