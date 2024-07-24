import { motion } from "framer-motion";
import { PROJECTS1, PROJECTS2, PROJECTS3, PROJECTS5, PROJECTS6, PROJECTS7, PROJECTS9, PROJECTS10, PROJECTS11, PROJECTS12, PROJECTS13 } from "../../constants";
import { useParams } from 'react-router-dom';

const Projects = () => {
  const { id } = useParams();
  let projects;

  switch(id) {
    case '1':
      projects = PROJECTS1;
      break;
    case '2':
      projects = PROJECTS2;
      break;
    case '3':
      projects = PROJECTS3;
      break;
    case '5':
      projects = PROJECTS5;
      break;
    case '6':
      projects = PROJECTS6;
      break;
    case '7':
      projects = PROJECTS7;
      break;
    case '9':
      projects = PROJECTS9;
      break;
    case '10':
      projects = PROJECTS10;
      break;
    case '11':
      projects = PROJECTS11;
      break;
    case '12':
      projects = PROJECTS12;
      break;
    case '13':
      projects = PROJECTS13;
      break;
    default:
      projects = [];
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
            {projects.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                    <a target="_blank" href={project.link}><img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded"/></a>
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:100}}
                        transition={{duration:1}}
                        className="w-full max-w-xl lg:w-3/4">
                        <a target="_blank" href={project.link}><h6 className="mb-2 font-semibold">{project.title}</h6></a>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-700">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
            <div></div>
        </div>
    </div>
  );
}

export default Projects;

