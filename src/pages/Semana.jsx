
import { useParams } from 'react-router-dom';
import { WEEKS } from '../constants';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration:0.5, delay: delay},
  },
})

const Semana = () => {
  const { id } = useParams();
  const week = WEEKS.find(week => week.link === `/semana${id}`);

  if (!week) {
    return <div>Semana no encontrada</div>;
  }

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mg-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-6 lg:text-8xl">{week.title}</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-green-400 via-slate-300 to-blue-300 bg-clip-text text-2xl  tracking-tight text-transparent">Descripción</motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">{week.description}</motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1.2}}
                src={week.image} alt="River_Belito" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Semana;






