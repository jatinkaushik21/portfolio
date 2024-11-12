import React from "react";
import { motion } from "framer-motion";
import AS from '../assets/projects/abhas2.jpg';
import DS from '../assets/friends/divya.png';
import KA from '../assets/friends/kanhaiya.jpg';
import HS from '../assets/friends/harish.jpg';
import AY from '../assets/friends/adi.jpg';
import DB from '../assets/friends/diksha2.jpg';
import GS from '../assets/friends/Gaurav.jpg';
import KS from '../assets/friends/Kushal.jpg';

const members = [
  {
    name: "Abha Sharma",
    title: "Web Developer",
    description: "Abha brings creativity and precision to every project. Her expertise in HTML, CSS, JavaScript, PHP, and SQL allows her to craft engaging websites that deliver exceptional user experiences.",
    imgSrc: AS,
    phone: ["+91 1234567890"],
    email: ["AbhaSharma@gmail.com"],
  },
  {
    name: "Divya Sharma",
    title: "Web Developer",
    description: "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc: DS,
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "Gaurav Sharma",
    title: "Web Developer",
    description: "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc: GS,
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "Kushal Sharma",
    title: "Web Developer",
    description: "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc: KS,
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "Kanhaiya Agrawal",
    title: "Web Developer",
    description: "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc: KA,
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "Harish Singh",
    title: "Web Developer",
    description: "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc: HS,
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "Aditya Yadav",
    title: "Web Developer",
    description: "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc: AY,
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "Diksha Bansal",
    title: "Web Developer",
    description: "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc: DB,
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
];

const animations = [
  { opacity: 1, x: 0 },
  { opacity: 1, x: 0 },
  { opacity: 1, x: 0 },
  { opacity: 1, x: 0 },
  { opacity: 1, x: 0 },
  { opacity: 1, x: 0 },
];

const Team = () => {
  
  return (
    
    <div className="p-0 m-0 overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="relative w-full min-h-screen">
        <div className="flex items-center justify-center bg-[#F8E2EA] bg-opacity-[0.15] top-11 rounded-full left-0 w-full h-full">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl lg:h-[110px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          >
            My Friends
          </motion.h1>
        </div>
        <div className="text-center p-8 sm:p-16 text-black  sm:mx-12 my-4 sm:my-8 bg-[#F8E2EA] bg-opacity-[0.25] rounded-[50px]">
          <div className="grid grid-col-1 gap-20 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-10 lg:gap-y-12 place-content-center">
            {members.map((member, index) => (
              <motion.div
                key={index}
                whileInView={animations[index % animations.length]}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`w-[250px] lg:w-[350px] mx-auto h-[380px] lg:h-[480px] rounded-[1.4rem] shadow-2xl overflow-hidden relative transition-transform transform hover:scale-105 ${
                  index === 0 ? "shadow-3xl shadow-pink-600" : ""
                }`}
                style={{
                  backgroundImage: `url(${member.imgSrc})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute flex flex-col bottom-0 w-full h-full bg-white bg-opacity-60 text-center p-7 font-semibold tracking-wider max-h-[100px] hover:max-h-full transition-all duration-700 hover:rounded-t-xl">
                  <h2 className="text-[16px] text-center uppercase pl-[.7em]">{member.name}</h2>
                  <p className="text-md text-center uppercase mt-[7px] text-pink-600">{member.title}</p>
                  <p className="mt-[20px] leading-[24px] text-center tracking-[.025em]">{member.description}</p>
                  <div className="flex justify-center flex-col items-center font-normal text-xs sm-leading-[30px] tracking-[.2em] uppercase mt-[10px]">
                    <div className="flex gap-x-2 items-center mt-[5px] mb-[5px] ml-[20px] mr-[20px]">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQVJREFUSEvVlIENgkAMRT+b6CTqJOok6iS6iTqJbqK+hCbH2TughBgvMSQI/9Hf/jaa+TQz6+tngLOkhaS9pOeUKr0KrpLWrehF0mkKJAek4vbhAACFKskBr4IdQI4Rq3LAo/Xe0wpBxgBukjZjq8gBTM/OEcH/5Vhxns8BiANJT1jcA3Av7wNfHpqgEiC3KdRcs8ALGgkmD1zteFXw/+HT+HubE7dFpV3EzPOyHSxigswqxKnUEl8MY23Zeam23QTcxKuJ79umteB5lpCVzoLsAyBSykYpFp2hGAJAiJ5sK2skhYUACOA5EK7phKXiX+tkaAW5HUD4rVoYQHdXRQGD19L/A97j1zAZUnbfggAAAABJRU5ErkJggg==" />
                      <a className="text-gray" href="*">{member.phone}</a>
                    </div>
                    <div className="flex mt-[5px] mb-[5px] ml-[20px] mr-[20px] items-center gap-x-2">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANlJREFUSEvtldsNwjAMRU83gU1gE5gEmASYhG4Cm0BvlUgmJHLTx09FPiPHx/fadRsWPs3C+VkXYAdcgc1E217AEWiVx1r06C4FmeMIsk0B75D5ApxGUm7AIbzti7cKIkB3tXZZW2yeIkBw9ULVeGpUtTyPb56eAlVz74LOIbCk5quZQbX6GE/RohigXkfhjzwrqFGg8FleIY9GeSuho5K6lwSpdl0to6M4QRBbk97DpNEMf9WyAh7lE2MwoKrDDqYZpSnsoFfA8ZFSUKu/kV0AAAAASUVORK5CYII=" />
                      <a className="text-gray" href="*">{member.email}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
