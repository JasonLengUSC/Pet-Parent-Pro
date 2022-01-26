import Service from "../../assets/service-flow.jpg";

import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <h1 className={classes.headline}>About Pet Parent Pro</h1>
      <p className={classes.text}>
        Welcome to the neighborhood network of trusted pet sitters and lovely
        dogs. Whether you need a dog sitter for the day or overnight boarding,
        there’s a sitter on PPP who’s the perfect match for you and your dogs.
        We are there for your pet when you can't be!
      </p>
      <h2 className={classes.headline}>
        Meet Sitters who will treat your dogs like family!
      </h2>
      <div className={classes.icon}>
        <img src={Service} alt="Dog boarding icon" />
      </div>
    </>
  );
};

export default About;
