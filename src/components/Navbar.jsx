import { FaBars, FaTimes } from "react-icons/fa"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Link } from 'react-scroll'
import PDF from '../assets/pdf/MarekBisCV.pdf'
import MediaLink from "./Medialink";




const Navbar = () => {
    const [openSide, setOpenSide] = useState(true);
    const handleOpenSide = () => setOpenSide(!openSide);

    const [showNav, setShowNav] = useState(false);
    const handleClickNav = () => setShowNav(!showNav);

    return (
        <div className="fixed w-full h-[56px] flex justify-between items-center pr-4 bg-[#0a192f] text-gray-300 z-50 shadow-md">
            <div className="w-fit h-full">
            </div>
            <div>
                {/* MENU */}
                <ul className="hidden md:flex">
                    <li><Link
                        activeClass="active"
                        to="home"
                        smooth={true}
                        duration={500}>
                        Domů
                    </Link></li>
                    <li><Link
                        activeClass="active"
                        to="about"
                        smooth={true}
                        duration={500}>
                        O mně
                    </Link></li>
                    <li><Link
                        activeClass="active"
                        to="skills"
                        smooth={true}
                        duration={500}>
                        Znalosti
                    </Link></li>
                    <li><Link
                        activeClass="active"
                        to="work"
                        smooth={true}
                        duration={500}>
                        Projekty
                    </Link></li>
                    <li><Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        duration={500}>
                        Kontakt
                    </Link></li>
                </ul>
            </div>

            {/* HAMBUGRGER */}
            <div onClick={handleClickNav} className="flex z-20 md:hidden">
                {showNav ? <FaTimes /> : <FaBars />}
            </div>

            {/* MOBILE MENU */}
            <ul className={showNav ? "top-0 left-0 w-full z-10 h-screen bg-[#0a192f] absolute md:hidden flex flex-col justify-center items-center" : 'hidden'}>
                <li className="text-3xl"><Link onClick={handleClickNav}
                    activeClass="active"
                    to="home"
                    smooth={true}
                    duration={500}>
                    Domů
                </Link></li>
                <li className="text-3xl"><Link onClick={handleClickNav}
                    activeClass="active"
                    to="about"
                    smooth={true}
                    duration={500}>
                    O mně
                </Link></li>
                <li className="text-3xl"><Link onClick={handleClickNav}
                    activeClass="active"
                    to="skills"
                    smooth={true}
                    duration={500}>
                    Znalosti
                </Link></li>
                <li className="text-3xl"><Link onClick={handleClickNav}
                    activeClass="active"
                    to="work"
                    smooth={true}
                    duration={500}>
                    Projekty
                </Link></li>
                <li className="text-3xl"><Link onClick={handleClickNav}
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    duration={500}>
                    Kontakt
                </Link></li>
            </ul>
            {/* SOCIAL ICONS  CLICK*/}

            <div className="hidden lg:flex lg:fixed lg:flex-col top-[35%] left-0">
                {/* SIDE MENU PC HOVER */}
                {
                    openSide ?
                    // SHOWN
                        <>
                            <div className="bg-gray-700 hover:bg-slate-600 h-full p-1 flex items-center justify-center w-[60px]" onClick={handleOpenSide}><IoIosArrowBack size={25} /></div>
                            <ul className="">
                                <MediaLink dev="pc" color="bg-[#0a66c2]" icon="linkedin" text="LinkedIn" link="https://www.linkedin.com/in/marek-bis-48467726b/" />
                                <MediaLink dev="pc" color="bg-[#333]" icon="github" text="GitHub" link="https://github.com/MarekBis" />
                                <MediaLink dev="pc" color="bg-[#d96c0d]" icon="email" text="E-mail" link="mailto:marek.bis5@seznam.com" />
                                <MediaLink dev="pc" color="bg-[#06c793]" icon="resume" text="CV" link={PDF} />
                            </ul>
                        </>
                        :
                        // HIDDEN
                        <>
                            <div className="opacity-60 hover:opacity-100 h-full p-1 flex items-center justify-center" onClick={handleOpenSide}><IoIosArrowForward size={25} /></div>
                        </>
                }
            </div>
            <div className="flex fixed flex-col lg:hidden top-3 left-0">
                {/* SIDE MENU MOBILE CLICK */}
                {
                    !openSide ?
                    // SHOWN
                        <>
                            {/* <div className="bg-gray-700 hover:bg-slate-600 h-full p-1 flex items-center justify-center w-[60px]" onClick={handleOpenSide}><IoIosArrowBack size={25} /></div>
                            <ul className="">
                                <MediaLink dev="mobile" color="bg-[#0a66c2]" icon="linkedin" text="LinkedIn" link="https://www.linkedin.com/in/marek-bis-48467726b/" />
                                <MediaLink dev="mobile" color="bg-[#333]" icon="github" text="GitHub" link="https://github.com/MarekBis" />
                                <MediaLink dev="mobile"color="bg-[#d96c0d]" icon="email" text="E-mail" link="mailto:marek.bis5@seznam.com" />
                                <MediaLink dev="mobile" color="bg-[#06c793]" icon="resume" text="CV" link={PDF} />
                            </ul> */}
                        </>
                        :
                        // HIDDEN
                        <>
                            {/* <div className="h-full p-1 flex items-center justify-center" onClick={handleOpenSide}><IoIosArrowForward size={25} /></div> */}
                        </>
                }
            </div>







        </div>
    )
}
export default Navbar