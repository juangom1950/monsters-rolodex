import React from "react";
import "./search-box.styles.css";

//use functional component if you think that you don't need access to "state" and "life cycle components"
//Here we are destructoring the props
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    //This setState is not going to happen inmediatly. It is asynchronous
    //We can use a callback to run the state after setState has finished
    onChange={handleChange}
  />
);
