import React from "react";

const Person = props => {
  return (
      <>
    <p onClick={props.swithchNameHandler}>
      I'm a {props.name} and i am {props.age}.
    </p>
    <p>{props.children}</p>
    </>
  );
};

export default Person;
