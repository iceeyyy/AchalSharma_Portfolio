import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo1 from "../assets/AchalLogo.png";


const Navbar = () => {
  return (
    
      <nav className="  mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo1} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="www.linkedin.com/in/achal-sharma35"><FaLinkedin/></a>
          <a href="https://github.com/iceeyyy"><FaGithub/></a>
          <a href="https://x.com/iicceeeyyy"><FaSquareXTwitter/></a>
        </div>

      </nav>
   
  )
}

export default Navbar
