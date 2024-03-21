import { data } from '../data/projectData'

const Project = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* hover */}
            <div id="color" className="opacity-0 text-center group-hover:opacity-100">
                <span className='text-2xl font-bold text-white tracking-wider'>
                    {props.name}
                </span>
                <div className='pt-8 text-center'>
                    <a href={props.demo}>
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
                    </a>
                    <a href={props.github}>
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}


const Work = () => {
    return (
        <div name="work" className="w-full h-[700px] text-gray-300 bg-[#0a192f]">
            <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-500">Projekty</p>
                    <p className="py-6">Moje dosavadní mini projekty.</p>
                </div>
                {/* CONTAINER */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {/* WORK CARD */}
                    {data.map((project, index) => {
                        return <div key={index}>
                            <Project name={project.siteName}
                            image={project.image}
                            github={project.github}
                            demo={project.demo}
                            />
                            </div>

                    })}
                    {console.log(data)}
                </div>


            </div>
        </div>
    )
}

export default Work