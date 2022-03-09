import { FaHome, FaDog, FaPeopleArrows, FaInfo } from "react-icons/fa";

import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import NavButton from "./NavButton";
import SignIn from "../UserBehavior/SignIn";
import Register from "../UserBehavior/Register";
import SignOut from "../UserBehavior/SignOut";

import { MailOutlined } from "@ant-design/icons";

import {
  HeaderStyled,
  HeaderPrimary,
  SiteName,
  NavLinkStyled,
  HeaderSign,
} from "./HeaderStyles";

const headerItems = [
  {
    id: "link1",
    url: "/home",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: "link2",
    url: "/dogs",
    text: "Find Your Lovely Guests ",
    icon: <FaDog />,
  },
  {
    id: "link3",
    url: "/sitters",
    text: "Find Your Trusted Dog Sitters",
    icon: <FaPeopleArrows />,
  },
  {
    id: "link4",
    url: "/about",
    text: "About us",
    icon: <FaInfo />,
  },
];

const navBtnArr = headerItems.map((item) => {
  const { id, url, text, icon } = item;
  return (
    <NavButton key={id} icon={icon}>
      <NavLinkStyled activeClassName="NavLinkClassName" to={url}>
        {text}
      </NavLinkStyled>
    </NavButton>
  );
});

const Header = (props) => {
  let hisotry = useHistory();

  const changeIconRouteHandler = () => {
    const newPath = "/home";
    hisotry.push(newPath);
  };

  const [showLoginForm, setShowLoginForm] = useState(false);

  const showLoginFormHandler = () => {
    setShowLoginForm(true);
  };
  const hideLoginFormHandler = () => {
    setShowLoginForm(false);
  };

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const showRegisterFormHandler = () => {
    setShowRegisterForm(true);
  };
  const hideRegisterFormHandler = () => {
    setShowRegisterForm(false);
  };

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const showLogoutModalHandler = () => {
    setShowLogoutModal(true);
  };
  const hideLogoutModalHandler = () => {
    setShowLogoutModal(false);
  };

  const [login, setLogin] = useState(false);
  return (
    <>
      <HeaderStyled>
        <HeaderPrimary>
          <SiteName onClick={changeIconRouteHandler}>Pet Parent Pro</SiteName>
          {[...navBtnArr]}
        </HeaderPrimary>
        <HeaderSign>
          <Link to={"/message"}>
            <MailOutlined
              style={{
                fontSize: "25px",
                marginRight: "25px",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            />
          </Link>

          {login ? (
            <>
              <NavButton onClick={showLogoutModalHandler}>Sign Out</NavButton>
              {showLogoutModal && <SignOut onClose={hideLogoutModalHandler} />}
            </>
          ) : (
            <>
              <NavButton onClick={showLoginFormHandler}>Sign In</NavButton>
              {showLoginForm && <SignIn onClose={hideLoginFormHandler} />}
              <NavButton onClick={showRegisterFormHandler}>Sign Up</NavButton>
              {showRegisterForm && (
                <Register onClose={hideRegisterFormHandler} />
              )}
            </>
          )}
        </HeaderSign>
      </HeaderStyled>
    </>
  );
};

export default Header;
