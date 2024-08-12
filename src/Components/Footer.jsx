import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/projects/Logo-JK-circular.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
const Footer = () => {
    const Year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-gradient-to-r from-[#ff9bf0] to-[#fad0c4] text-white">
            <div className="relative w-full overflow-hidden -mb-1">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block fill-black"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between p-10">
                <div 
                className="flex flex-col items-start mb-10 lg:mb-0 lg:w-1/3">
                    <NavLink onClick={scrollToTop}> 
                        <motion.img whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }} className="w-[85px] h-auto " src={Logo} alt="Logo" />
                    </NavLink>
                    
                    <motion.h2
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0,x: 100 }}
                    transition={{ duration: 1 }}
                    className="text-[35px] font-semibold text-pink-500 mb-2">Jatin Kaushik</motion.h2>
                    <motion.p 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0,x: -100 }}
                     transition={{ duration: 1 }}
                    className="text-[16px] mb-6">
                        Designing with purpose, crafting with passion.
                        <div><NavLink to="/Team">Friends</NavLink></div>
                        
                    </motion.p>
                </div>
                <div className="grid lg:grid-cols-3 gap-5 lg:pl-[150px] sm:grid-cols-1 mt-[40px] lg:w-2/3 w-full">
                    <div>
                        <motion.h3 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }} className="text-[18px] font-semibold text-pink-500 py-2 uppercase">Soft Skills</motion.h3>
                        <motion.ul whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0,x: 100 }}
             transition={{ duration: 1 }} className="text-[14px]">
                            <li className="my-2">Self Mortivated</li>
                            <li className="my-2">Social</li>
                            <li className="my-2">Communication</li>
                            <li className="my-2">Adaptability</li>
                        </motion.ul>
                    </div>

                    <div>
                    <motion.h3 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }} className="text-[18px] font-semibold text-pink-500 py-2 uppercase">Hobbies</motion.h3>
                        <motion.ul whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0,x: 100 }}
             transition={{ duration: 1 }} className="text-[14px]">
                            <li className="my-2">Traveling</li>
                            <li className="my-2">Photography</li>
                            <li className="my-2">Crafting</li>
                            <li className="my-2">Gaming</li>
                        </motion.ul>
                    </div>

                    <div>
                    <motion.h3 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }} className="text-[18px] font-semibold text-pink-500 py-2 uppercase">Get in touch</motion.h3>
                        <motion.p whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0,x: 100 }}
             transition={{ duration: 1 }} className="text-[14px] my-2">Email: jatinkaushik598@gmail.com</motion.p>
                        <motion.p whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0,x: 100 }}
             transition={{ duration: 1 }} className="text-[14px] my-2">Phone: +91 9520008334 </motion.p>
                    </div>
                </div>
            </div>
            <motion.h6  whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0,x: -100 }}
                    transition={{ duration: 1 }} className="text-center text-black text-[14px] py-4">© Jatin Kaushik 2024. All rights reserved. {Year}</motion.h6>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0,x: 100 }}
             transition={{ duration: 1 }}
            className="flex items-center justify-center pb-[20px] mt-[20px] space-x-6">
                <a
    className="text-black text-xl hover:text-pink-500 transform hover:scale-150 
    transition-all duration-150 ease-in-out"
    href="https://github.com/jatinkaushik21"
    target="_blank"
    rel="noopener noreferrer"
>
    <FaGithub />
</a>
                <a
                    className="text-black text-xl hover:text-pink-500 transform hover:scale-150
                    transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/jatin-kaushik-b8638228b/"
                    target="_blank"
    rel="noopener noreferrer"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    className="text-black text-xl hover:text-pink-500 transform hover:scale-150
                    transition-all duration-150 ease-in-out" href="https://x.com/JatinKaushik21"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaXTwitter />
                </a>
                <a
                    className="text-black text-xl hover:text-pink-500 transform hover:scale-150
                    transition-all duration-150 ease-in-out" href="https://www.instagram.com/itz_jatinbro/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
            </motion.div>
        </footer>
    );
};

export default Footer;
