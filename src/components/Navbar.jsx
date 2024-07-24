import logo from "../assets/RiverbLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div 
        whileHover={{ scale: 1.5, rotate: 360 }}
        className="flex flex-shrink-0 items-center">
        <Link to={"/"}><img className="mx-2 w-10" src={logo} alt="logo" /></Link>
      </motion.div>
      <div className="m-8 flex items-center justify-center gap-8 text-2xl">
        <motion.a whileHover={{ scale: 1.5 }} target="_blank" href="https://www.linkedin.com/in/river-leonardo-belito-chahuayllo-bb678925b"><FaLinkedin/></motion.a>
        <motion.a whileHover={{ scale: 1.5 }} target="_blank" href="https://github.com/uncpleo"><FaGithub/></motion.a>
        <motion.a whileHover={{ scale: 1.5 }} target="_blank" href="https://www.instagram.com/rlbelito/"><FaInstagram/></motion.a>
        <motion.a whileHover={{ scale: 1.5 }} target="_blank" href="https://x.com/leo_chahu"><FaSquareXTwitter/></motion.a>
      </div>
    </nav>
  );
}

export default Navbar;

