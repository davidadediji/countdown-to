import React from "react";

const Container = (props) => {
  return (
      <section className={`max-w-screen-xl m-auto ${props.className}`}>
        {props.children}
      </section>
  );
};

export default Container;