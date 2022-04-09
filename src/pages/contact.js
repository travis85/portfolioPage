import React from 'react'

function Contact() {
  return (
    <div className=' flex flex-col justify-center w-100	 px-40 py-10 mt-8 mb-10   bg-gray-500 '>

        <div className='flex justify-center'>
            <h1>
                Email Me!
            </h1>
        </div>
        
        <div className='justify-center'>
        <form action='tflake@gmail.com' method='POST'>
            <div className='max-w-[60%] '>
            <div className="mb-3 ">
                <label for="" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Message</label>
                <textarea type="text" className="form-control" id="exampleInputPassword1"/>
            </div>


            </div>
            
            <button type="submit" className="btn  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Submit</button>
        </form>

        </div>

    </div>
  )
}

export default Contact