import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa"

const MediaLink = (props) => {
    let combinedClassName=``;
    if (props.dev == "pc"){
        combinedClassName = `${props.color} w-[160px] font-bold text-xl h-[60px] justify-center items-center ml-[-100px] hover:ml-0 ease-in-out duration-300`
    }else{
        combinedClassName = `${props.color} w-full font-bold text-lg h-[60px] justify-center items-center ease-in-out duration-300`
    }
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
        {
            props.dev =="mobile" ?
            <li className={combinedClassName}>
                <a href={props.link} target="_blank" className="flex justify-center gap-3 items-center w-full text-gray-300">
                    {props.text}{chooseIcon(props.icon)}</a>
            </li>
            :
            <li className={combinedClassName}>
                <a href={props.link} target="_blank" className="flex justify-between items-center w-full text-gray-300">
                    {props.text}{chooseIcon(props.icon)}</a>
            </li>

        }
        </>
    )
}
export default MediaLink;