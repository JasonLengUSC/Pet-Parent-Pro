import styled from "styled-components";

const ButtonStyled = styled.button`
    font: inherit;
    background: #695265;
    border: solid #695265;
    color: white;
    margin-right: 1em;
    cursor: pointer;
    &:hover, &:active {
        text-decoration: underline;
        text-underline-offset: 0.5em;
    };
    & a:hover, & a:visited, & a:link, & a:active {
        text-decoration: none;
        color: white;
    }
`
export { ButtonStyled };