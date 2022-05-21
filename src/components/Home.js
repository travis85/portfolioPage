import React from "react";
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
              <Breadcrumb.Item href="#">Contact Me </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item href={ResumePDF} className="ml-2">
              Resume
            </Breadcrumb.Item>
          </Breadcrumb>
          </Stack>
      </div>
   </div>
      
  {/* MD BREAKPOINT */}
    <div className='hidden md:grid grid-cols-2 place-items-center'>
        <div>
          <h1 className="text-2xl m-4 place-self-center text-blue-900">Javascript | HTML | CSS | React | SQL Databases </h1>
        <div className="md:  text-center  p-4">
          <div className='grid grid-cols-1'>
            <div className='ProfileDetails basis-2/3'>
              <div className='mb-2'>
                <Link  to="contactMe" spy={true} smooth={true}>
                <button   className=" border-solid border-2 rounded py-1 px-2 ring-2  m-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                  Contact Me
                </button>
                </Link>   

                <a href={ResumePDF}>
                  <button className=" border-solid border-2 rounded py-1 px-2 ring-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >Resume</button>
                </a>
              </div>

              </div>    
              <a href="https://drive.google.com/file/d/1sAi5JfSJv8mDpPmzj_6JVg-h7nKEi3fy/view?usp=sharing"><p>Letters Of Recommendation</p></a>      
          
          </div>
    

  </div> 


        </div>
        <div className="grid grid-cols-1 pl-[20%]">
          
        <div className='grid grid-cols-1 place-items-center items-center shadow-xl mt-4 border-solid border-2 rounded '>
      
      <img className='hidden md:block rounded opacity-90 ' src={backgroundPic} alt=""/>

      <div className='absolute mt-2'>
        <img className='h-48 aspect-square rounded-full ' src={pic} alt=""/>

        <div className='grid grid-row place-content-center text-2xl mt-2 mb-4'>
          
            <span className='primary-text text-white'>
              {''}
              Hello, I'm <span className='highlighted-text text-red-500 '>Travis!</span><br></br>
              <span className='grid grid-row place-content-center'>
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
        
  </>
  )
}

export default Home
