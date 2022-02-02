import { FaHome, FaDog, FaPeopleArrows, FaInfo } from "react-icons/fa";

import { HeaderStyled, HeaderPrimary, HeaderSign, SiteName, NavLinkStyled, MainImgWrapper } from "./HeaderStyles";
import NavButton from "../UI/NavButton";
import headerDogImage from "../../assets/header-dogs.jpeg";
import { useState, Fragment } from "react";

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
  const [login, setLogin] = useState(false);
  return (
    <>
      <HeaderStyled>
        <HeaderPrimary>
          <SiteName>Pet Parent Pro</SiteName>
          {[...navBtnArr]}
        </HeaderPrimary>
        <HeaderSign>
          {login ?
            <NavButton>
              <NavLinkStyled activeClassName="NavLinkClassName" to="/logout">
                Log out
              </NavLinkStyled>
            </NavButton>
            :
            <Fragment>
              <NavButton>
                <NavLinkStyled activeClassName="NavLinkClassName" to="/login">
                  Log in
                </NavLinkStyled>
              </NavButton>
              <NavButton>
                <NavLinkStyled activeClassName="NavLinkClassName" to="/register">
                  Sign up
                </NavLinkStyled>
              </NavButton>
            </Fragment>
          }
        </HeaderSign>
      </HeaderStyled>
      <MainImgWrapper>
        <img src={headerDogImage} alt="doggies" />
      </MainImgWrapper>
    </>
  );
};

export default Header;
