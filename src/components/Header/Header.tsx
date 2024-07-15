import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const home = () => {
    console.log("he");

    navigate("/");
  };
  const project = () => {
    navigate("/project");
  };
  const about = () => {
    navigate("/about");
  };
  const contact = () => {
    navigate("/contact");
  };
  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  return (
    <nav>
      <ul className="sidebar">
        <li onClick={hideSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 96 960 960"
              width="26"
            >
              <path
                d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                style={{ fill: "white", backgroundColor: "black" }}
              />
            </svg>
          </a>
        </li>
        <li>
          <a onClick={home}>Home</a>
        </li>
        <li>
          <a onClick={about}>About</a>
        </li>
        <li>
          <a onClick={project}>Project</a>
        </li>
        <li>
          <a href="#">Technology</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            Portfolio <span className="logo-name">&nbsp;JS</span>
          </a>
        </li>
        <li className="hideOnMobile">
          <a onClick={home}>Home</a>
        </li>
        <li className="hideOnMobile">
          <a onClick={about}>About</a>
        </li>
        <li className="hideOnMobile">
          <a onClick={project}>Project</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Blog</a>
        </li>
        <li className="hideOnMobile">
          <a href="#" onClick={contact}>
            Contact
          </a>
        </li>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 96 960 960"
              width="26"
            >
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
