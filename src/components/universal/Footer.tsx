import { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { HashLink as NavLink } from "react-router-hash-link";

import FeedbackForm from "./FeedbackForm";

const Footer = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const onSubmit = async (feedback: string, isAnonymous: boolean, senderName?: string) => {
    try {
      console.log(feedback, isAnonymous, senderName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className={`fixed left-0 w-screen h-screen bg-black/10 flex items-center justify-center ease-in duration-200 z-[300] ${
          showFeedback ? "top-0" : "-top-[100vh]"
        }`}
        onClick={() => {
          console.log("hahsh");
          setShowFeedback(false);
        }}>
        <div className="bg-[#e8eaf0] w-fit rounded-[24px]">
          <FeedbackForm onSubmit={onSubmit} />
        </div>
      </div>
      <footer className="w-full h-fit px-4 lg:px-8 bg-[#151655] text-white z-[200]">
        <div className="w-full h-full grow-0 flex flex-col py-2 max-w-[1740px] mx-auto">
          <div className="flex justify-between py-2">
            <div className="flex gap-2 items-center grow-0">
              <div className="w-14 h-14 rounded-full">
                <img
                  src="/icon-footer.png"
                  className={`w-full h-full cursor-pointer object-contain`}
                  height={300}
                  width={300}
                  alt="Logo STEI-K 23"
                />
              </div>
              <div className="flex flex-col justify-center font-outfit">
                <p className="uppercase font-bold text-xl md:text-2xl leading-4">Syntax</p>
                <p className="text-sm md:text-xl">code, create, connect</p>
              </div>
            </div>

            <div className="hidden lg:flex pl-2 py-4 lg:py-0 flex-col sm:flex-row justify-evenly items-start lg:items-center font-light grow uppercase">
              <NavLink smooth to="/">
                About Us
              </NavLink>
              <NavLink smooth to="/">
                Support Us
              </NavLink>
              <NavLink smooth to="/">
                Contact Us
              </NavLink>
              <NavLink smooth to="/">
                Media Kit
              </NavLink>
            </div>

            <div className="flex flex-col justify-center pb-2 lg:pb-0 items-end grow-0 text-right">
              <p className="text-xs md:text-xl">Like What You&apos;re Seeing?</p>
              <p className="text-xs md:text-xl">Give us feedback!</p>
              <div className="flex cursor-pointer" onClick={() => setShowFeedback(true)}>
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
              </div>
            </div>
          </div>
          <div className="flex md:hidden flex-col md:flex-row py-4 uppercase gap-4 ">
            <div className="grow flex justify-between">
              <NavLink smooth to="/">
                About Us
              </NavLink>
              <NavLink smooth to="/">
                Support Us
              </NavLink>
            </div>
            <div className="grow flex justify-between">
              <NavLink smooth to="/">
                Contact Us
              </NavLink>
              <NavLink smooth to="/">
                Media Kit
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex lg:hidden justify-evenly py-4 uppercase gap-4">
            <NavLink smooth to="/">
              About Us
            </NavLink>
            <NavLink smooth to="/">
              Support Us
            </NavLink>
            <NavLink smooth to="/">
              Contact Us
            </NavLink>
            <NavLink smooth to="/">
              Media Kit
            </NavLink>
          </div>
          <div className="w-full flex justify-between gap-4 border-t-2 border-white">
            <div className="py-2">
              <p>&copy; 2024 BPA Academics STEI-K 2023. All rights reserved.</p>
            </div>
            <div className="py-2 gap-4 flex flex-row items-center">
              <FaInstagram />
              <FaYoutube />
              <FaTiktok />
              <FaXTwitter />
              <SiLinktree />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
