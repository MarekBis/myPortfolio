
import { useState, useEffect } from 'react';
import MediaLink from './Medialink'
import PDF from '../assets/pdf/MarekBisCV.pdf'
const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 590); // Adjust the threshold as needed
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div>
            <div className="w-full bg-[#0a192f] h-full lg:hidden">
                <ul className="flex">
                    {
                        isMobile ?
                            <>
                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#0a66c2]" icon="linkedin" link="https://www.linkedin.com/in/marek-bis-48467726b/" />
                                </div>
                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#333]" icon="github" link="https://github.com/MarekBis" />
                                </div>
                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#d96c0d]" icon="email" link="mailto:marek.bis5@seznam.com" />
                                </div>
                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#06c793]" icon="resume" link={PDF} />
                                </div>
                            </>
                            :
                            <>

                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#0a66c2]" text="LinkedIn" icon="linkedin" link="https://www.linkedin.com/in/marek-bis-48467726b/" />
                                </div>
                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#333]" text="Github" icon="github" link="https://github.com/MarekBis" />
                                </div>
                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#d96c0d]" text="E-mail" icon="email" link="mailto:marek.bis5@seznam.com" />
                                </div>
                                <div className="p-0 w-1/4">
                                    <MediaLink dev="mobile" color="bg-[#06c793]" text="CV" icon="resume" link={PDF} />
                                </div>

                            </>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Footer