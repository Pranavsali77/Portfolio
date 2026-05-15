import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["Full-Stack Java Developer", "AI Engineer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
};

export default Type;
