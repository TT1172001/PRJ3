// import libraries
import React from "react";
import { useSelector } from "react-redux";

const Avatar = ({ src, size }) => {
  // set state
  const { theme } = useSelector((state) => state);

  // Template
  return (
    <img
      src={src}
      alt="avatar"
      className={size}
      style={{ filter: `${theme ? "invert(1)" : "invert(0)"}` }}
    />
  );
};

export default Avatar;
