"use client";

import copy from 'copy-to-clipboard';
import { Tooltip } from "flowbite-react";
const Contact = () => {




  return (
    <div name='contact' className=" h-screen py-20 md:py-0 bg-[#0a192f] flex justify-center flex-col items-center p-4 w-full">
      <form action="https://getform.io/f/jbwxgvva" method="POST" className=" flex flex-col w-[1/5] gap-3">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-500 text-gray-300 ">
            Kontakt
          </p>
          <div className="text-gray-300 py-4">
            Konktaktovat mě můžete v přiloženém formuláři, popřípadě přímo na můj email:<span> </span>
            <span onClick={() => copy("marek.bis5@seznam.cz")} className='inline-block hover:text-green-500 cursor-pointer'>
              <Tooltip className='cursor-default' content="Zkopírováno" trigger="click" style='light' animation={false}>
                <Tooltip className='cursor-default' content="Kopírovat" trigger='hover' style='light'>
                  <b>marek.bis5@seznam.cz</b>
                </Tooltip>
              </Tooltip>
            </span>
          </div>
        </div>
        <input autoComplete="on" className="p-2 bg-[#0a192f] outline-none border-2 text-white border-green-500" type="text" name="name" placeholder="Jméno" required="required" />
        <input autoComplete="on" className="p-2 bg-[#0a192f] outline-none border-2 text-white border-green-500" type="email" name="email" placeholder="E-mail" required="required" />
        <textarea className="p-2 bg-[#0a192f] outline-none border-2 text-white border-green-500" name="message" rows="10" placeholder="Zpráva..." required="required"></textarea>
        <button type="submit" className="text-white border-2 border-green-500 hover:bg-green-500 hover:border-green-500 px-4 py-3 my-3 w-1/4 flex items-center justify-center ">Odeslat</button>
      </form>
    </div>
  )
}

export default Contact