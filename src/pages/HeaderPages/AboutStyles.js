import styled from "styled-components";

const AboutHeadline = styled.h1`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #695265;
    font-weight: bold;
    margin-top: 2em;
    margin-bottom: 2em;
`
const AboutText = styled.p`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    color: #5f455a;
    font-size: 20px;
    border-style: solid;
    border-color: #a38f9f86;
    border-width: thin;
    border-radius: 10px;
    padding: 30px;
    margin-left: 15em;
    margin-right: 15em;
    margin-bottom: 4em;
`
const AboutIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export { AboutHeadline, AboutText, AboutIconWrapper };