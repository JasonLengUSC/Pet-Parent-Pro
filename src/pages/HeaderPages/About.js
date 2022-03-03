import HeaderWithImage from "../../components/UI/HeaderWithImage";

import Service from "../../assets/service-flow.jpg";
import { AboutHeadline, AboutText, AboutIconWrapper } from "./AboutStyles";

const About = () => {
  return (
    <>
      <HeaderWithImage />
      <AboutHeadline>About Pet Parent Pro</AboutHeadline>
      <AboutText>
        Welcome to the neighborhood network of trusted pet sitters and lovely
        dogs. Whether you need a dog sitter for the day or overnight boarding,
        there’s a sitter on PPP who’s the perfect match for you and your dogs.
        We are there for your pet when you can't be!
      </AboutText>
      <AboutHeadline>
        Meet Sitters who will treat your dogs like family!
      </AboutHeadline>
      <AboutIconWrapper>
        <img src={Service} alt="Dog boarding icon" />
      </AboutIconWrapper>
    </>
  );
};

export default About;
