import React, { useState } from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { ReactComponent as MobileMenu } from "../assets/MobileMenu.svg";
import { ReactComponent as Close } from "../assets/Close.svg";
import Logo from "../assets/Logo.png";

const Header = ({ openModal, setOpenModal }) => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const navLinkElements = [
    { name: "FAQ", url: "#faq" },
    { name: "Features", url: "#features" },
    { name: "Use Cases", url: "#use-cases" },
  ];

  const navLinks = navLinkElements.map((item) => (
    <li key={item.name}>
      <Link to={item.url}>{item.name}</Link>
    </li>
  ));

  return (
    <header className="bg-background">
      <Container className="flex items-center justify-between p-5">
        <Link to="/">
          <img src={Logo} alt="County" className="w-[199.31px] h-[63.31px]" />
        </Link>
        <ul className="flex gap-10 max-[768px]:hidden">{navLinks}</ul>
        <Button
          className="bg-secondary hover:bg-[#800C3C] flex gap-[10px] text-white py-[17px] px-8 rounded-[64px] max-[768px]:hidden"
          onClick={() => setOpenModal(true)}
        >
          Get started <ArrowRight />
        </Button>
        <MobileMenu
          onClick={() => setMobileToggle(true)}
          className={`w-8 h-8 hidden max-[768px]:block`}
        />
      </Container>
      <div
        className={`w-full h-screen bg-white hidden max-[768px]:block fixed top-0 left-0 p-10 z-30 ${
          mobileToggle ? "nav-mobile nav-active" : "nav-mobile"
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="County"
            className="w-[199.31px] h-[63.31px] mb-5"
          />
        </Link>
        <Close
          onClick={() => setMobileToggle(false)}
          className="absolute top-10 right-12"
        />
        <ul className="flex flex-col gap-5">{navLinks}</ul>
        <Button className="hidden bg-secondary gap-[10px] text-white py-[17px] px-8 rounded-[64px] max-[768px]:flex max-[768px]:mt-5">
          Get started <ArrowRight />
        </Button>
      </div>
    </header>
  );
};

export default Header;
