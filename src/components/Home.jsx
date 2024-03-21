import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>

        {/* CONTAINER */}
        <div className="max-w-[900px] mx-auto p-8 flex flex-col justify-center h-full">
            <h1 className='text-4xl sm:text-7xl font-bold'>Marek Bis</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>Jsem Junior Front End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              Od školy se věnuji Informačním technnologiím, momentálně zaměřený na FullStack Web Development.
            </p>
            <div>
                <button className='group text-white border-2 px-4 py-3 flex justify-center items-center hover:bg-green-500 hover:border-green-500'><Link
                        activeClass="active"
                        to="work"
                        smooth={true}
                        duration={500}>Projekty</Link>
                <span className='group-hover:rotate-90 group-hover:translate-x-1 group-hover:-translate-y-[3px] duration-300'><HiArrowNarrowRight className='ml-2' size={20}/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home