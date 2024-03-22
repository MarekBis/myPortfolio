import { data } from '../data/projectData'

const Project = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover */}
            <div id="color" className="opacity-0 text-center rounded-md group-hover:opacity-100 h-full flex justify-center items-center flex-col">
                <span className='text-2xl font-bold text-white tracking-wider'>
                    {props.name}
                </span>
                <div className='pt-8 text-center'>
                    <a href={props.demo} target='_blank'>
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg hover:bg-green-500 hover:text-white'>Demo</button>
                    </a>
                    <a href={props.github} target='_blank'>
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg hover:bg-green-500 hover:text-white'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}


const Work = () => {
    return (
        <div name="work" className="w-full py-20 md:py-0 h-fit md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-500">Projekty</p>
                    <p className="py-6">Moje dosavadní mini projekty.</p>
                </div>
                {/* CONTAINER PROJECTS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {/* PROJECT CARD */}
                    {data.map((project, index) => {
                        return <div key={index}>
                            <Project name={project.siteName}
                            image={project.image}
                            github={project.github}
                            demo={project.demo}
                            />
                            </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Work