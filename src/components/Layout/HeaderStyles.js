import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderStyled = styled.header`
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #695265;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border: 0;
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`
const HeaderPrimary = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #695265;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    border: 0;
    margin: 0;
`
const HeaderSign = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #695265;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    border: 0;
    margin: 0;
`
const SiteName = styled.h1`
    color: white;
    position: relative;
    margin-left: 20px;
    margin-right: 40px;
    font-size: x-large;
    cursor: pointer;
`

const NavLinkStyled = styled(NavLink)`
  &.${props => props.activeClassName} {
    color: white;
    font-weight: bold;
  }
`;

const MainImgWrapper = styled.div`
    width: 100%;
    height: 30rem;
    z-index: 0;
    overflow: hidden;
    margin-bottom: 5em;
    & img {
        width: 110%;
        height: 100%;
        object-fit: cover;
        transform: rotateZ(-1deg) translateY(-2rem) translateX(-6rem);
    } 
`

export { HeaderStyled, HeaderPrimary, HeaderSign, SiteName, NavLinkStyled, MainImgWrapper };