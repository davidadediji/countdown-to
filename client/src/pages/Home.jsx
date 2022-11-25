import React, { useState } from "react";
import Button from "../ui/Button";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import Modal from "../components/Modal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main
      style={{
        minHeight: "calc(100vh - 103px)",
      }}
      className="
     flex justify-center items-center bg-background"
    >
      <div className="max-w-screen-xl m-auto text-center flex flex-col items-center p-5">
        <h1
          className="text-6xl  text-center leading-normal mb-3
          max-[768px]:text-5xl max-w-[768px]:leading-relaxed
        "
        >
          Never lose track of your important dates with our{" "}
          <span className="text-secondary">countdown timer.</span>
        </h1>
        <p className="text-center text-lg">
          County is a free countdown app that allows you to keep track of
          important events and count down to a date with your own unique
          countdown timer via an easily accessible link.
        </p>
        <div
          className="p-4 flex gap-4 items-center justify-center mt-10 max-[508px]:grid grid-cols-2
        "
        >
          <Timer title="Days" value={8} />
          <Timer value=":" className="max-[508px]:hidden" />
          <Timer title="Hours" value={12} />
          <Timer value=":" className="max-[508px]:hidden" />
          <Timer title="Minutes" value={44} />
          <Timer value=":" className="max-[508px]:hidden" />
          <Timer title="Seconds" value={28} />
        </div>
        <div>
          <Button
            className="bg-secondary flex gap-[10px] text-white py-[17px] px-8 rounded-[64px]"
            onClick={() => setOpenModal(!openModal)}
          >
            Create a countdown link <ArrowRight />
          </Button>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </main>
  );
};

export default Home;

const Timer = ({ title, value, className }) => {
  return (
    <div className={`item ${className} text-center`}>
      <h3 className="text-7xl font-normal leading-relaxed text-countDown">
        <span className="block text-sm"> {title} </span>
        <span> {value} </span>
      </h3>
    </div>
  );
};
