import React from 'react'
import aboutMePic from "../assets/aboutMePic.jpeg"

export default function AboutMe() {
  return (
    <div id='aboutMe'  className='mt-8 mb-8 flex flex-col justify-center text-center place-items-center '>
        <div className=''>
            <h1 className='flex justify-center  italic text-blue-900 underline underline-offset-1 text-4xl font-semibold '>About Me</h1>
        </div>

        <div className='grid grid-cols-1 place-content-center mt-4 md:flex flex-row relative '>
  
            <div className='grid grid-cols-1 place-content-center  md:flex flex-cols-1 basis-1/3  text-2xl '>
                <br></br>
                <p className='m-2'>
                    "There is no greater thing you can do with your <span className='highlighted-text text-red-700 text-3xl'>LIFE </span>and your work than follow your <span className='highlighted-text text-red-700 text-3xl'>PASSIONS</span> in a way that <span className='highlighted-text text-red-700 text-3xl'>SERVES THE WORLD</span> and you!"
                    <br></br> <span className='italic font-bold'>-Richard Branson-</span>
                </p>
            </div>
            


            <div className='flex  flex-col text-2xl basis-2/3 mr-4 justify-content-end  mt-8'>
                <div className='flex justify-center shadow-2xl mb-8'>
                    <img className='max-h-96 rounded' src={aboutMePic}/>
                </div>


                <h1 >I'm <span className='highlighted-text text-red-700 '>Travis</span>, A Junior Software Engineer</h1>
                <h3>Based out of Romulus, Michigan</h3>
                <p>that's not afraid of new challenges! </p><br></br>
                <span className='highlighted-text text-red-700 text-3xl'><p>Hard Work + Dedication = SUCCESS!</p></span>


            </div>


        </div>
        
        


        

        


    </div>
  )
}
