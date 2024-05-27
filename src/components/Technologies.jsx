import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { DiBootstrap, DiCss3, DiGit, DiGithubBadge, DiGo, DiHtml5, DiJsBadge } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            whileHover={{ scale: 1.2}}
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiBootstrap ctjsLine className="text-7xl text-purple-600"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiCss3 className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(6)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiJsBadge className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(7)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiHtml5 className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(8)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiGit className="text-7xl text-red-500"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(9)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiGithubBadge className="text-7xl text-gray-600"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(10)}
             initial="initial"
             whileHover={{ scale: 1.2}}
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiGo className="text-7xl text-sky-400"/>
            </motion.div> 
        </motion.div>
    </div>
  )
}

export default Technologies
