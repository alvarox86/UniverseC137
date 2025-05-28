import "./AboutPage.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1 className="about-title">About this page</h1>
        <p className="about-text">
          This web application is dedicated to the <strong>Rick and Morty</strong> universe. Here
          you can explore a list of characters from the series, and you also
          have the option to <strong>add, edit or delete</strong> custom variations of these
          characters.
        </p>
        <h2 className="about-subtitle">About me</h2>
        <p className="about-text">
          My name is Álvaro and I am a Web Application Development student. I am
          passionate about frontend development and I have created this website
          as part of my learning. I hope you like it!
        </p>
      </div>

      <div className="about-icons">
        <Link to={"https://github.com/alvarox86"} target="_blank">
            <GitHubIcon sx={{ height: "100px", width: "100px" }} />
        </Link>
        <Link to={"https://www.linkedin.com/in/%C3%A1lvaro-ruiz-monfillo-681108365/"} target="_blank">
            <LinkedInIcon sx={{ height: "100px", width: "100px" }} />
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
