import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GIT from '../assets/git.png'
import JAVASCRIPT from '../assets/javascript.png'
import REACT from '../assets/react.png'
import TAILWIND from '../assets/tailwind.png'
import PHP from '../assets/php.png'


const Experience = (props) => {

    return (
        <div className='shadow shadow-[#040c16] m-1 flex flex-col items-center justify-center h-[140px] hover:scale-110 duration-200 ease-in-out bg-[#0a192f]'>
            <img className='size-20' src={props.icon} alt="html" />
            <p className='text-center mt-3'>{props.text}</p>
        </div>
    )
}

const Skills = () => {
    return (
        <div name='skills' className="w-full h-fit py-20 md:py-0 md:h-screen flex flex-col justify-center text-gray-300 bg-[#0a192f]">
            <div className='flex flex-col items-center justify-center'>
                <div className='max-w-[900px] w-full px-4 '>
                    <h2 className='text-4xl font-bold border-b-4 border-green-500 inline'>Znalosti</h2>
                    <p className='pt-6 pb-4'>Výběr z technologií, se kterými již mám zkušenosti.</p>
                    <div className='mt-8 grid-cols-2 sm:grid-cols-3 grid gap-3'>
                        <Experience icon={HTML} text="HTML" />
                        <Experience icon={CSS} text="CSS" />
                        <Experience icon={JAVASCRIPT} text="JAVASCRIPT"/>
                        <Experience icon={PHP} text="PHP"/>
                        <Experience icon={REACT} text="REACT"/>
                        <Experience icon={TAILWIND} text="TAILWIND"/>
                        <div></div>
                        <Experience icon={GIT} text="GIT"/>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Skills