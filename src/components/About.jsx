
const About = () => {
    return (
        <div  className="w-full h-[500px] pb-60 flex flex-col justify-center text-gray-300 bg-[#0a192f]">
            <div className="flex flex-col justify-center items-center ">
                <div className="max-w-[900px] w-full px-4 grid sm:grid-cols-2 gap-8">
                    <div className="sm:pb-8 sm:pl-4 ">
                        <p className="text-4xl font-bold inline border-b-4 border-green-500">O mně</p>
                    </div>
                    <div>
                        {/* EMPTY */}
                    </div>
                </div>
                <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <p>Jmenuji se Marek Bis a je mi 21 let, pocházím z města Ivančice nedaleko od Brna. Už od mala mám rád technologie a proto se jim již dlouhou dobu věnuji. Mým cílem je stát se Full Stack Developerem. Momentálně se ucházím o juniorní pozici pro začátek. Baví mě se učit nové věci, proto se každý den vzdělávám a zdokonaluji svoje dosavadní znalosti v oboru.</p>

                    <div className="text-3xl hidden sm:block font-bold">
                        <p>Vítej na mém portfoliu. Tuto stránku aktivně aktualizuji</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About