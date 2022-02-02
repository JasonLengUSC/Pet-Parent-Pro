import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: white;
    color: #695265;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;
    &:hover, &:active {
    text-shadow: 0.3px 0.3px #857882;
    }
`

export { Button as HomePageBtn };