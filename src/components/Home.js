import React, {useState} from "react";
import Typical from "react-typical"
import pic from "../assets/portfolioPic.jpeg"
import backgroundPic from "../assets/backgroundPic.jpeg"
import ResumePDF from '../assets/Resume.pdf'
import { Link } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { Breadcrumb, Stack } from 'react-bootstrap'

const Home = () => {
  


  return (
    <>
    <div className="sm:hidden bg-slate-300 p-1">
      <div className="grid grid-cols-2 place-items-center mt-3">
        <div>
          <img className='rounded-full h-32' src={pic} alt="" />
          <div className="grid grid-cols-1 mt-2 place-items-center">
            <span className='primary-text text-black'>
              
              Hello, I'm <span className='highlighted-text text-red-500 '>Travis!</span><br></br>
              <div className='grid grid-rows-1 place-items-center' >
              <span>
                <a href='https://github.com/travis85'>
                  <i className="bi bi-github mt-4  hover:text-red-500 "></i>
                </a>
              </span>
              </div>
              
            </span>
          </div>
          </div>
          <Stack className="ml-2 mt-2" >
            <Breadcrumb>
            <Link to="contactMe" spy={true} smooth={true}>
              <Breadcrumb.Item href="#">About Me  </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item href={ResumePDF} className="ml-2">
              Resume
            </Breadcrumb.Item>
          </Breadcrumb>
          </Stack>
      </div>
   </div>
      
  {/* MD BREAKPOINT */}
    <div className='hidden md:inline text-4xl'>
    <div className="md:bg-blue-600 bg-black justify-center text-center place-items-center h-[10%] min-h-fit  p-4">
    <div className='ProfileParent flex flex-row'>
      <div className='ProfileDetails basis-2/3'>
        <div className=' flex flex-col mt-20 mb-10'>
          <span className='primar-text text-black'>
           
                  <Typical 
                    loop={Infinity}
                    steps={[
                      'Full Stack Developer💻 ',
                      1200,
                      'Javascript ',
                      1200,
                      'React ',
                      1200,
                      'Express',
                      1200,
                      'PostgreSQL',
                      1200,
                      'Bootstrap',
                      1200,
    
                    ]}
                    wrapper="h1"
                  />
                
            
             
            <span className='text-xl'>
              <a href="https://drive.google.com/file/d/1UoZl7PevlbQi4euC1xqAjdR8zwUqNNwV/view?usp=sharing" className="text-white">Letters Of recommendations</a>
            </span>
          </span>
      </div>
      <div className='mb-10'>
      <Link  to="contactMe" spy={true} smooth={true}>
        <button   className="animate-bounce border-solid border-2 rounded py-1 px-2 ring-2  m-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          Contact Me
        </button>
        </Link>

        <a href={ResumePDF}>
          <button className="animate-bounce border-solid border-2 rounded py-1 px-2 ring-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >Resume</button>
        </a>
      </div>

      </div>
        <div className=' basis-1/3  flex justify-content-center  items-center shadow-xl mt-4 rounded-tl-xl rounded-bl-xl border-solid border-2 rounded  ring-2 '>
        
          <img className='hidden md:block aspect-4/3 relative w-100 rounded-tl-xl rounded-bl-xl opacity-90' src={backgroundPic} alt=""/>

          <div className='absolute mt-2'>
            <img className='rounded-xl  aspect-square md:rounded-full h-48' src={pic} alt=""/>

            <div className=' text-2xl mt-2 mb-4'>
              
                <span className='primary-text text-white'>
                  {''}
                  Hello, I'm <span className='highlighted-text text-red-500 '>Travis!</span><br></br>
                  <span className=''>
                    <a href='https://github.com/travis85'>
                      <i className="bi bi-github mt-4  hover:text-red-500 "></i>
                    </a>
                  </span>
                </span>
              </div>
          </div>
        </div>
        </div>
        

      </div>
      </div>
          
      </>
  )
}

export default Home