import { motion } from "framer-motion";
import { WEEKS } from '../constants';
import { useParams } from 'react-router-dom';


const Text = () => {
    const { id } = useParams();
    const week = WEEKS.find(week => week.link === `/semana${id}`);

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="mt-20 bg-gradient-to-r from-green-400 via-slate-300 to-blue-300 bg-clip-text text-3xl text-center tracking-tight text-transparent"
            >
                Tópicos Aprendidos
            </motion.h2>

            <div className="flex flex-col items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mt-6 font-semibold">Definiciones</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mb-3 max-w-3xl font-light tracking-tighter text-justify">{week.topicsLearned.definitions}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="font-semibold">Procedimientos</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mb-3 max-w-3xl font-light tracking-tighter text-justify">{week.topicsLearned.procedures}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="font-semibold">Resultados</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mb-8 max-w-3xl font-light tracking-tighter text-justify">{week.topicsLearned.results}</p>
                </motion.div>
            </div>

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="mt-20 bg-gradient-to-r from-green-400 via-slate-300 to-blue-300 bg-clip-text text-3xl text-center tracking-tight text-transparent"
            >
                Reflexión
            </motion.h2>

            <div className="flex flex-col items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mt-6 font-semibold">Metacognitiva</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mb-3 max-w-3xl font-light tracking-tighter text-justify">{week.reflection.reflectionMetacognitiva}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="font-semibold">¿Que aprendí?</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mb-3 max-w-3xl font-light tracking-tighter text-justify">{week.reflection.queAprendio}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="font-semibold">¿Como aprendí?</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:w-1/2 text-center"
                >
                    <p className="mb-8 max-w-3xl font-light tracking-tighter text-justify">{week.reflection.comoAprendio}</p>
                </motion.div>
            </div>
        </div>
    );
}

export default Text;



