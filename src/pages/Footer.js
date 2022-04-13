import React from "react";
import weatherPic from '../assets/weatherPic.jpeg'
import toDoListPic from '../assets/toDoListPic.png'
import scrabblePic from '../assets/scrabblePic.jpeg'


export default function Footer(){
    return(
        
        <div className=" mt-20  space-y-20" >

            <div className="flex justify-center text-blue-500 text-6xl  font-semibold mb-4 ">
                <h1 className= "font-mono italic text-blue-900 underline underline-offset-1	" >Featured Projects</h1>
            </div>
            <div className="card mb-3 shadow-xl mr-[20%] ml-2 rounded-xl bg-gradient-to-r from-blue-500 to-transparent" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ weatherPic } className="rounded-xl h-80" alt="..."/>
                    </div>
                    <div className="col-md-8 ">

                        <div className="card-body">
                            <a href="https://github.com/travis85/weatherApp"><h5 className=" flex justify-center italic font-semibold text-4xl hover:-translate-y-1 hover:scale-110 hover:animate-bounce text-blue-500">Weather App</h5></a>
                            <div className="flex justify-center mt-20" >
                            <p className="text-2xl">Find out what's the weather like in your favorite City!</p>

                            </div>
                         </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 shadow-xl ml-[20%] mr-2 rounded-xl bg-gradient-to-l from-blue-500 to-transparent" >
                <div className="float-right ">
                    <div className="col-md-4 float-right">
                        <img src={ scrabblePic } className="rounded-xl h-80" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="https://github.com/travis85/scrabbleSolverInterview/tree/main"><h1 className="flex justify-center italic font-semibold text-4xl hover:-translate-y-1 hover:scale-110 hover:animate-bounce text-blue-500">Scrabble Cheater</h1></a>
                            <div className="flex justify-center mt-20 text-2xl">
                            <p>Never lose at Scrabble Ever again! 
                            Type in your letters and explore the possibilities!
                            </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 shadow-xl mr-[20%] ml-2 rounded-xl bg-gradient-to-r from-blue-500 to-transparent" >
                <div className="row g-0 ">
                    <div className="col-md-4 ">
                        <img src={ toDoListPic } className="rounded-xl h-80" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="https://to-do-list-e1f8f.web.app"><h2 className="flex justify-center italic font-semibold text-4xl text-blue-500 hover:-translate-y-1 hover:scale-110 hover:animate-bounce">To-do-List</h2></a>
                            <div className="flex justify-center mt-20 text-2xl">
                                <p className="">Never forget a task again!
                                 Set your priorities straight with the ultimate To-Do-List!</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}