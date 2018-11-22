import React from "react";

const ErrorMassage = props => {
  if (
    typeof props === "object" &&
    props.hasOwnProperty("message") &&
    typeof props.message === "string" &&
    props.message
  ) {
    return (
      <div style={{ backgroundColor: "red", color: "white" }}>
        {props.message}
      </div>
    );
  }
  return "";
};

export default ErrorMassage;
