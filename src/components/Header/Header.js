import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  const routeChange = () => {
    let path =
      "https://api.whatsapp.com/send?phone=601151381227&text=Interested%20to%20hire%20you%20for%20my%20company.";
    window.open(path);
  };

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* home link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* resume */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio */}
          <Nav.Link
            as={NavLink}
            to="/form"
            className={
              pathName == "/form" ? "header_link_active" : "header_link"
            }
          >
            Form
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton
            text={"Hire Me"}
            icon={<Telegram />}
            onclick={routeChange()}
          ></CustomButton>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
