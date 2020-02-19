import React from "react"
import HelloComponent from "./Hello"

const AboutComponent = props => {
  return <h1>About Component! <HelloComponent/> </h1>;
};

export default AboutComponent
