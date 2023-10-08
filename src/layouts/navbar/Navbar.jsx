import React, { useState } from "react";
import { Container, ContentWrapper } from "../";
import { whiteLogo, Login, RegisterIcon } from "../../assets";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    path: "/",
    name: "Home",
    id: 1,
  },
  {
    path: "/Subscription",
    name: "Subscription",
    id: 2,
  },
  {
    path: "/features",
    name: "Features",
    id: 3,
  },
  {
    path: "/register",
    name: "Register",
    id: 4,
    icon: RegisterIcon,
  },
  {
    path: "/login",
    name: "Login",
    id: 5,
    icon: Login,
  },
];

const Navbar = () => {
  const [isToggle, setIstoggle] = useState(false);

  return (
    <Container className="navbar">
      <ContentWrapper className="links">
        <Link to={"/"}>
          <img src={whiteLogo} alt="logo" />
        </Link>
        <div className="toggleBox">
        <div className="toggle" onClick={() => setIstoggle(!isToggle)}>
          <div className={isToggle ? "one rotateOne" : "one "}></div>
          <div className={isToggle ? "one hide" : "one "}></div>
          <div className={isToggle ? "one rotateTwo" : "one "}></div>
        </div>
        </div>
       
        <ul className={isToggle?"showLinks":"hideLinks"}>
          {links.map((el) => (
            <li key={el.id}>
              <NavLink
                to={el.path}
                style={{
                  textTransform: el?.icon ? "" : "uppercase",
                  fontWeight: el?.icon ? "" : "600",
                }}
              >
                {el?.icon && <img src={el.icon} alt="icon" />}
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </Container>
  );
};

export default Navbar;
