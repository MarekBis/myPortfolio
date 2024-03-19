import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='bg-[#162234] w-full h-screen'>

        {/* CONTAINER */}
        <div className="max-w-[900px] mx-auto p-8 flex flex-col justify-center h-full">
            <p className='text-green-500'>Zdravím, jmenuji se</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Marek Bis</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reiciendis magni ad labore? Dolorem, mollitia consequatur sequi nam quibusdam, quam incidunt soluta, atque dignissimos ea ut ullam voluptatibus perspiciatis obcaecati.</p>
            <div>
                <button className='group text-white border-2 px-4 py-3 flex justify-center items-center hover:bg-green-500 hover:border-green-500'>View work
                <span className='group-hover:rotate-90 group-hover:translate-x-1 group-hover:-translate-y-[3px] duration-300'><HiArrowNarrowRight className='ml-2' size={20}/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home