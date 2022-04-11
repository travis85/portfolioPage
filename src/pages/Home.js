import React from "react";
import Typical from "react-typical"
import pic from "../assets/portfolioPic.jpeg"
import backgroundPic from "../assets/backgroundPic.jpeg"
import resume from "../assets/Resume.pdf"
import { Button } from 'react-scroll'



const Home = () => {
  return (
    <div className="  justify-center text-center place-items-center h-[10%] min-h-fit  ">
    <div className='ProfileParent flex flex-row'>
      <div className='ProfileDetails basis-2/3'>

        <div className=' flex flex-col mt-20 mb-10'>
          <span className='primar-text text-black'>
            {""}
            <h1 className='text-4xl'>
              
              <Typical
                loop={Infinity}
                steps={[
                  'Full Stack Developer💻 ',
                  1100,
                  'React💻 ',
                  1100,
                  'Javascript 💻' ,
                  1100,
                  'Postgres SQL 💻',
                  1100,
                ]}
                wrapper="h1"
              />
            </h1>
            <span className=' text-xl'>
              Dedicated - Motivated - Reliable
            </span>
          </span>
      </div>
      <div className='mb-10'>
        <button   className="animate-bounce border-solid border-2 rounded py-1 px-2 ring-2  m-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          
          Contact Me
        </button>

        <a href='../assets/Resume.pdf' download={resume}>
          <button className="animate-bounce border-solid border-2 rounded py-1 px-2 ring-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >Resume</button>
        </a>
      </div>

      </div>
        <div className=' basis-1/3  flex justify-content-center  items-center shadow-xl mt-4 rounded-tl-xl rounded-bl-xl border-solid border-2 rounded  ring-2 '>
          <img className='relative w-100 rounded-tl-xl rounded-bl-xl opacity-90' src={backgroundPic}/>

          <div className='absolute'>
            <img className='rounded-full  h-52' src={pic}/>
            <div className=' text-2xl mt-10 '>
              <span className='primary-text text-white'>
                {''}
                Hello, I'm <span className='highlighted-text text-red-500 '>Travis!</span><br></br>
                <span className=''>
                  <a href='https://github.com/travis85'>
                    <i className="bi bi-github mt-4 hover:text-red-500 "></i>
                  </a>
                </span>
              </span>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Home