import React from "react";
// import arrowRight from "../assets/arrow-right.svg";

const Home = () => {
  return (
    <main className="h-screen flex justify-center items-center bg-background">
      <div className="max-w-screen-xl m-auto text-center">
        <h1 className="text-6xl  text-center leading-normal mb-3">
          Never lose track of your important dates with our{" "}
          <span className="text-secondary">countdown timer.</span>
        </h1>
        <p className="text-center text-lg">
          County is a free countdown app that allows you to keep track of
          important events and count down to a date with your own <br />
          unique countdown timer via an easily accessible link.
        </p>
        <div className="p-4 flex gap-4 items-center justify-center mt-10">
          <Timer title="Days" value={8} />
          <Timer value=":" />
          <Timer title="Hours" value={12} />
          <Timer value=":" />
          <Timer title="Minutes" value={44} />
          <Timer value=":" />
          <Timer title="Seconds" value={28} />
        </div>
        <button className="bg-secondary text-background text-lg  py-4 px-8 rounded-full font-normal">
          Start the countdown
          <span>{/* <img src={arrowRight} alt="arrow-right" /> */}</span>
        </button>
      </div>
    </main>
  );
};

export default Home;

const Timer = ({ title, value }) => {
  return (
    <div className="item  text-center">
      <h3 className="text-7xl font-normal leading-relaxed text-countDown">
        <span className="block text-sm"> {title} </span>
        <span> {value} </span>
      </h3>
    </div>
  );
};
