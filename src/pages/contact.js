import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




function Contact() {
    const form = useRef();

    function SendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5pjlv9v', 'template_6pmctkm', form.current, 'yVVuJzhIpkT7UcW7j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        form.current.reset()
    }

  return (
    <div id='contactMe'  className=' flex flex-col justify-center w-100	 px-40 py-10 mt-8   bg-gradient-to-r from-gray-500 '>

        {/* HEADER SECTION */}
        <div className='flex justify-center text-4xl italic font-semibold mb-4'>
            <h1>
                Email Me!
            </h1>
        </div>

        {/* EMAIL SECTION */}
        <div className='justify-center mb-10'>
            <form ref={form}  onSubmit={SendEmail}>

                <div className='max-w-[60%] '>
                    <div className="mb-3 ">
                        <label  className="form-label text-2xl">Name:</label>
                        <input type="text" className="form-control" name='name' />
                    </div>
                    <div className="mb-3 ">
                        <label  className="form-label text-2xl">Email Address:</label>
                        <input type="email" className="form-control" name='email'  />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label text-2xl ">Message:</label>
                        <textarea name='message' className="form-control " />
                    </div>
                    <input type="submit" value='Send' className="border-solid border-2 rounded py-2 px-4 ring-2  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"></input>
                </div>

            </form>
        </div>

    </div>
  )
}

export default Contact