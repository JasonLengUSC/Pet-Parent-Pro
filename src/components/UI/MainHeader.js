import { FaHome, FaDog, FaPeopleArrows, FaInfo } from "react-icons/fa";

import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

import {
  HeaderStyled,
  HeaderPrimary,
  HeaderSign,
  SiteName,
  NavLinkStyled,
} from "./HeaderStyles";

import NavButton from "./NavButton";
import SignIn from "../UserBehavior/SignIn";
import Register from "../UserBehavior/Register";
import SignOut from "../UserBehavior/SignOut";


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
  const hideLoginFormHanlder = () => {
    setShowLoginForm(false);
  };

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const showRegisterFormHandler = () => {
    setShowRegisterForm(true);
  };
  const hideRegisterFormHanlder = () => {
    setShowRegisterForm(false);
  };

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const showLogoutModalHandler = () => {
    setShowLogoutModal(true);
  };
  const hideLogoutModalHanlder = () => {
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
          {login ? (
            <>
            <NavButton onClick={showLogoutModalHandler}>Sign Out</NavButton>
            {showLogoutModal && <SignOut onClose={hideLogoutModalHanlder} />}
            </>
          ) : (
            <>
              <NavButton onClick={showLoginFormHandler}>Sign In</NavButton>
              {showLoginForm && <SignIn onClose={hideLoginFormHanlder} />}
              <NavButton onClick={showRegisterFormHandler}>Sign Up</NavButton>
              {showRegisterForm && (
                <Register onClose={hideRegisterFormHanlder} />
              )}
            </>
          )}
        </HeaderSign>
      </HeaderStyled>
    </>
  );
};

export default Header;