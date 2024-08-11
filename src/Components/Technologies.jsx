import { RiReactjsLine, RiTailwindCssFill, RiGithubFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion"
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
  y: [10, -10],
  transition: {
  duration: duration,
  ease: "linear",
  repeat: Infinity,
  repeatType: "reverse",
  },
  },
  });

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-7xl text-[#61DAFB]"/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className="text-7xl text-[#47A248]"/> 
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiGithubFill className="text-7xl text-gray-300"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className="text-7xl text-[#06B6D4]"/>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className="text-7xl text-[#339933]"/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <GrMysql className="text-7xl text-[#4479A1]"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
