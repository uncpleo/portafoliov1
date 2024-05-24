import logo from "../assets/RiverbLogo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justufy-center gap-8 text-2xl">
            <a target="_blank" href="www.linkedin.com/in/river-leonardo-belito-chahuayllo-bb678925b"><FaLinkedin/></a>
            <a target="_blank" href="https://github.com/uncpleo"><FaGithub/></a>
            <a target="_blank" href="https://www.instagram.com/rlbelito/"><FaInstagram/></a>
            <a target="_blank" href="https://x.com/leo_chahu"><FaSquareXTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar
