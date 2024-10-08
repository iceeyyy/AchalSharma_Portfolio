import { RiReactjsLine } from "react-icons/ri"
import { SiSolidity } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {animate, motion} from "framer-motion"

const iconVariants=(duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease: "Linear",
            repeat: Infinity,
            repeatType:"reverse",
        }
    },
})

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine  className="text-7xl text-cyan-400"/>
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSolidity  className="text-7xl "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython   className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql  className="text-7xl text-sky-700"/>
        </div>
      </div>
    </div>
  )
}

export default Technology
