import React from "react";
import { useState } from "react";
import memoji from "../assets/image.png";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
// import { FiDownload } from "react-icons/fi";
// import Resume from "../assets/Yassine - Front-end Developer - Resume.pdf";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  // const clickdownload = () => {
  //   const link = document.createElement("a");
  //   link.href = Resume;
  //   link.download = "Yassine - Front-end Developer - Resume";
  //   link.click();
  // };

  return (
    // <nav className=" backdrop-filter backdrop-blur-lg flex my-6 mx-[4rem] max-md:mx-[1rem] px-[2rem] py-[0.6rem] justify-between items-center rounded-2xl bg-gradient-to-r from-[#A370F0] to-[#792FE9] bg-opacity-5 sticky top-[24px]">
    <nav className="z-[1000] backdrop-filter backdrop-blur-lg flex my-6 mx-[4rem] max-md:mx-[1rem] px-[2rem] py-[0.6rem] justify-between items-center rounded-2xl bg-purple-600/30 sticky top-[24px]">
      <a href="#top">
        <img src={memoji} alt="Memoji" className=" h-[70px]" />
      </a>
      <ul className=" flex gap-[2rem] text-lg max-md:hidden items-center">
        <a href="#about">
          <li className=" cursor-pointer">About</li>
        </a>
        <a href="#projects">
          <li className=" cursor-pointer">Projects</li>
        </a>
        <a href="#contact">
          <li className=" cursor-pointer">Contact</li>
        </a>
        {/* <div
          className=" hover:bg-gradient-to-b bg-gradient-to-r from-[#7000fa] cursor-pointer flex items-center gap-[10px]  px-[15px] py-[8px] rounded-lg"
          onClick={clickdownload}
        >
          Resume <FiDownload />
        </div> */}
      </ul>
      {!isClicked && (
        <img
          src={menu}
          alt="menu"
          className="w-[40px] h-[40px] rounded-[5px] cursor-pointer hidden max-md:block"
          onClick={clickHandler}
        />
      )}
      {isClicked && (
        <img
          src={cross}
          alt="menu"
          className="w-[40px] h-[40px] rounded-[5px] cursor-pointer hidden max-md:block"
          onClick={clickHandler}
        />
      )}

      {isClicked && (
        <ul className=" w-[100%] absolute right-0 top-[100px] flex flex-col items-center gap-[20px] py-[30px] rounded-2xl backdrop-filter backdrop-blur-lg bg-[#351B57]">
          <a href="#about" onClick={clickHandler}>
            <li className=" cursor-pointer">About</li>
          </a>
          <a href="#projects" onClick={clickHandler}>
            <li className=" cursor-pointer">Projects</li>
          </a>
          <a href="#contact" onClick={clickHandler}>
            <li className=" cursor-pointer">Contact</li>
          </a>
          {/* <div
            className=" cursor-pointer flex items-center gap-[10px]"
            onClick={() => {
              const link = document.createElement("a");
              link.href = Resume;
              link.download = "Yassine - Front-end Developer - Resume";
              link.click();
              setIsClicked(!isClicked);
            }}
            download="YASSINE-HAIMOUCH-resume"
          >
            Download Resume <FiDownload />
          </div> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
