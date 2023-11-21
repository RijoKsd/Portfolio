import React from "react";
import Project from "./Project";
import calculator from "../../assets/calculator.png";
import sketch from "../../assets/etch-a-sketch.png";
import rps from "../../assets/rock-paper-scissors.png";
import notekeeper from "../../assets/notekeeper.png";
import todo from "../../assets/todo.png";
import supermart from "../../assets/supermart.png";


import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className=" flex flex-col justify-center mx-[1rem] lg:mx-[4rem] pt-[12rem]"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" grid grid-cols-1 gap-[5rem] md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 "
      >
        <Project
          img={notekeeper}
          title="NoteKeeper - Your Personal Note-Keeping Website"
          github="https://github.com/RijoKsd/NoteKeeper"
          demo="https://notekeepers.vercel.app/"
          desc=" NoteKeeper is a note-keeping website that allows you to create, edit, and delete notes."
        />
        <Project
          img={rps}
          title="Rock Paper Scissor Game"
          github="https://github.com/RijoKsd/Rock-Paper-Scissor"
          demo="https://rijoksd.github.io/Rock-Paper-Scissor/"
          desc=" A simple Rock Paper Scissor game made using HTML, CSS, and JavaScript."
        />
        <Project
          img={sketch}
          title="Etch A Sketch"
          github="https://github.com/RijoKsd/todo"
          demo="https://rijoksd.github.io/Etch-A-Sketch/"
          desc=" Etch A Sketch game crafted with HTML, CSS, and JavaScript"
        />
        <Project
          img={todo}
          title="Todo App"
          github="https://github.com/RijoKsd/todo"
          demo="https://todo-lis.netlify.app/"
          desc="
          A JavaScript-powered to-do list that allows users to add, edit, and delete tasks using local storage.
          "
        />
        <Project
          img={calculator}
          title="Calculator"
          github="https://github.com/RijoKsd/Calculator"
          demo="https://rijoksd.github.io/Calculator/"
          desc=" 
          A simple calculator made using HTML, CSS, and JavaScript"
        />
        <Project
          img={supermart}
          title="Shopping Cart With QR Code"
          github="https://github.com/RijoKsd/SuperMart-Shopping-with-QR-Code"
          desc=" 
          A project using html,css,js, python flask, android java, and mysql  database, user can scan product and add to cart and pay.
          
          "
        />
      </motion.div>
    </div>
  );
};

export default Projects;
