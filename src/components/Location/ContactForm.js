import PageSubTitle from '../PageSubTitle';

function ContactForm() {
  return (
    <div className="container m-auto my-10 flex justify-center">
      
    <form className="w-full lg:w-1/2">

      {/** FORM TITLE */}
      <div className="my-5">
        <PageSubTitle subtitle="Contact us" />
      </div>
      
      

      {/** NAME */}
      <div>
        <input className="border w-full outline-none border-gray-900 placeholder-gray-900 px-2 py-2 rounded-none" placeholder="name" type="text" />     
      </div>

      {/** EMAIL AND PHONE NUMBER  */}
      <div>
        <input className="border-l  outline-none  border-r  w-2/4 border-gray-900 placeholder-gray-900 px-2 py-2 rounded-none" placeholder="email" type="email" />
        <input className="border-r  w-2/4 border-gray-900  outline-none  placeholder-gray-900 px-2 py-2 rounded-none" placeholder="Phone Number" type="text" />
      </div>

      {/** MESSAGE */}
      <div>
        <textarea className="border  outline-none  w-full h-40 border-gray-900 placeholder-gray-900 px-2 py-2 rounded-none" placeholder="Message" />
      </div>

      {/** SUBMIT BUTTON */}
      <div>
      <input className="border border-gray-900 cursor-pointer hover:bg-gray-600 hover:text-gray-200 px-6 py-2 rounded-none" value="Submit" type="submit" />     
      </div>
      
    </form>
    </div>
  )
}

export default ContactForm
