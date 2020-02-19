import React from "react"
import HelloComponent from "./Hello"
const BlogComponent = props => {
  return <h1>Blog Component! <HelloComponent/> </h1>;
};
export default BlogComponent
