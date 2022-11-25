import React from 'react'
import Button from '../ui/Button';
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import Logo from "../assets/Logo.png";

const Header = () => {
    const navLinkElements = [
        { name: "FAQ", url: "#faq" },
        { name: "Features", url: "#features" },
        { name: "Use Cases", url: "#use-cases" },
    ];

    const navLinks = navLinkElements.map((item) => (
        <li key={item.name}>
            <Link to={item.url}>{item.name}</Link>
        </li>
    ))

  return (
    <header className='max-w-screen-xl m-auto flex items-center justify-between p-5'>
        <Link to="/">
            <img src={Logo} alt="County" className='w-[199.31px] h-[63.31px]' />
        </Link>
        <ul className='flex gap-10'>
            {navLinks}
        </ul>
        <div>
            <Button className="bg-secondary flex gap-[10px] text-white py-[17px] px-8 rounded-[64px]">Get started <ArrowRight /></Button>
        </div>
    </header>
  )
}

export default Header;