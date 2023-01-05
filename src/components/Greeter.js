import React from "react";

const Greeter = ({ name }) => {
  if (name) {
    return <p>Hi there {name}</p>;
  } else {
    return <p>Hello stranger ,nice to meet you</p>;
  }
};

export default Greeter;
