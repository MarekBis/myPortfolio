import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { TbBrandVscode } from "react-icons/tb";
import { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const MediaLink = (props) => {
    const combinedClassName = `${props.color} hidden w-[160px] font-bold text-xl h-[60px] lg:flex justify-center items-center ml-[-100px] hover:ml-0 ease-in-out duration-300`

    const chooseIcon = (iconName) => {
        switch (iconName) {
            case 'linkedin':
                return <FaLinkedin size={30} />;
            case 'github':
                return <FaGithub size={30} />;
            case 'email':
                return <HiOutlineMail size={30} />;
            case 'resume':
                return <BsFillPersonLinesFill size={30} />;
            default:
                return <TbBrandVscode size={30} />;
        }
    }
    return (
        <>
            <li className={combinedClassName}>
                <a href="#" className="flex justify-between items-center w-full text-gray-300">
                    {props.text}{chooseIcon(props.icon)}</a>
            </li>
        </>
    )
}

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const handleClickNav = () => setShowNav(!showNav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div className="w-fit h-full">
                LOGO
            </div>
            <div>
                {/* MENU */}
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* HAMBUGRGER */}
            <div onClick={handleClickNav} className="flex z-20 md:hidden">
                {showNav ? <FaTimes /> : <FaBars />}
            </div>

            {/* MOBILE MENU */}
            <ul className={showNav ? "top-0 left-0 w-full z-10 h-screen bg-[#0a192f] absolute md:hidden flex flex-col justify-center items-center" : 'hidden'}>
                <li className="text-3xl">Home</li>
                <li className="text-3xl">Skills</li>
                <li className="text-3xl">Work</li>
                <li className="text-3xl">Contact</li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex fixed flex-col top-[35%] left-0">
                <ul>
                    <MediaLink color="bg-[#0a66c2]" icon="linkedin" text="LinkedIn" />
                    <MediaLink color="bg-[#333]" icon="github" text="GitHub" />
                    <MediaLink color="bg-blue-900" icon="idk" text="VSCode" />
                </ul>
            </div>
        </div>
    )
}
export default Navbar