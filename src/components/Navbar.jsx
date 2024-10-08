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
          <FaLinkedin/>
          <FaGithub/>
          <FaSquareXTwitter/>
        </div>

      </nav>
   
  )
}

export default Navbar
