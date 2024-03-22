// TODO ADD COPYTOCLIPBOARD API

const Contact = () => {
  return (
    <div name='contact' className="w-full h-fit py-20 md:py-0 md:h-screen bg-[#0a192f] flex justify-center flex-col items-center p-4">
        <form action="https://getform.io/f/jbwxgvva" method="POST" className=" flex flex-col w-[1/5] gap-3">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-500 text-gray-300 ">Kontakt</p>
                <p className="text-gray-300 py-4">V přiloženém formuláři mě můžete kontaktovat, popřípadě na email: <span className=' hover:text-green-500'>marek.bis@seznam.cz</span></p>
            </div>
            <input className="p-2 bg-[#0a192f] outline-none border-2 text-white border-green-500" type="text" name="name" placeholder="Jméno" required="required" />
            <input className="p-2 bg-[#0a192f] outline-none border-2 text-white border-green-500" type="email" name="email" placeholder="E-mail" required="required"/>
            <textarea className="p-2 bg-[#0a192f] outline-none border-2 text-white border-green-500" name="message" rows="10" placeholder="Zpráva..." required="required"></textarea>
            <button type="submit" className="text-white border-2 border-green-500 hover:bg-green-500 hover:border-green-500 px-4 py-3 my-3 w-1/4 flex items-center justify-center ">Odeslat</button>
        </form>
    </div>
  )
}

export default Contact