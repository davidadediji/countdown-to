import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t-[0.4px] border-footer">
      <Container className="py-20">
        <div className="flex justify-between">
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="County"
                className="w-[199.31px] h-[63.31px]"
              />
            </Link>
            <p className="font-semibold text-lg text-footer mt-[25px]">
              Stay organized and productive with County
            </p>
            <p className="font-bold text-lg text-primary mt-11">
              Subscribe to our newsletter
            </p>
            <input
              className="border border-[#C7C7CF] w-[375px] h-16 p-5 rounded-[64px] outline-none mb-[18px] mt-[30px]"
              type="email"
              placeholder="Enter your email address"
            />
            <Button className="bg-secondary hover:bg-backgroundHover flex gap-[10px] text-white py-[17px] px-8 rounded-[64px]">
              Subscribe <ArrowRight />
            </Button>
          </div>
          <div>
            <h3 className="font-bold text-xl text-footerHeading mb-12">
              Company
            </h3>
            <ul className="flex flex-col gap-[26px]">
              <li className="text-lg text-footer">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Cookie Policy</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Terms And Conditions</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-footerHeading mb-12">
              Use Cases
            </h3>
            <ul className="flex flex-col gap-[26px]">
              <li className="text-lg text-footer">
                <Link to="/">Set Events</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Email Link</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Show Timer</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Optimum Security</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Calender Overview</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Fast Page Loads</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-footerHeading mb-12">
              Product
            </h3>
            <ul className="flex flex-col gap-[26px]">
              <li className="text-lg text-footer">
                <Link to="/">Help Center</Link>
              </li>
              <li className="text-lg text-footer">
                <Link to="/">Roadmap</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-20 border-[0.4px] border-footer" />
        <div className="flex justify-between items-center">
          <div className="flex gap-[30px]">
            <Link to="/">
              <Facebook />
            </Link>
            <Link to="/">
              <Instagram />
            </Link>
            <Link to="/">
              <Twitter />
            </Link>
          </div>
          <p className="text-lg text-footer">Copyright &copy; 2022. County.io All right reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
