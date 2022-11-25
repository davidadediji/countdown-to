import React, { useState } from "react";
import { ReactComponent as Cancel } from "../assets/Close.svg";
import UserFormInput from "./UserformInput";
import { Link } from "react-router-dom";

const Modal = ({ setOpenModal }) => {
  const [values, setValues] = useState({
    title: "",
    date: "",
    email: "",
    description: "",
  });

  const inputs = [
    {
      id: "title",
      label: "Countdown title",
      placeholder: "Enter event name",
      type: "text",
      required: true,
      pattern: "[a-zA-Z0-9 ]{3,}",
      error: "Please enter a valid title",
      name: "title",
    },

    {
      id: "description",
      label: "Countdown description (Optional)",
      placeholder: "Enter brief description of your event",
      name: "description",
      type: "textarea",
    },

    {
      id: "date",
      label: "Countdown to date",
      placeholder: "November 24, 2022",
      type: "date",
      required: true,
      error: "Please enter a valid date",
      name: "date",
    },

    {
      id: "email",
      label: "Email address",
      placeholder: "Enter email address",
      type: "email",
      required: true,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      error: "Please enter a valid email",
      name: "email",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-50 flex flex-col justify-center items-center">
      <div
        className="w-[766px] min-h-[680px] bg-white rounded-[16px]
            max-md:w-[500px] max-sm:w-[370px] py-16 px-32 relative max-md:px-6
        "
      >
        <Cancel
          onClick={() => setOpenModal(false)}
          className="cursor-pointer  absolute top-10 left-10 hover:fill-[#E5E5E5] hover:scale-110  hover:opacity-30 transition-all "
        />
        <form
          action="POST"
          className="flex flex-col gap-6 w-full"
          onSubmit={handleSubmit}
        >
          <h4 className="text-2xl font-semibold text-left">
            Create an Event Countdown
          </h4>
          <div className="">
            {inputs.map((input) => (
              <UserFormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="text-center w-full flex items-center justify-center">
            <Link
              to="/countdown"
              className="bg-secondary flex gap-[10px] hover:bg-[#800C3C]  text-white py-[17px] px-8 rounded-[64px]"
            >
              Create a countdown link
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
