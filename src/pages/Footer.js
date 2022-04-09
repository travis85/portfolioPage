import React from "react";
import weatherPic from '../assets/weatherPic.webp'
import toDoListPic from '../assets/toDoListPic.png'
import scrabblePic from '../assets/scrabblePic.jpeg'


export default function Footer(){
    return(
        
        <div className=" mt-10 ml-2 rounded-xl" >
            <div className="flex justify-center text-blue-500 text-6xl font-semibold mb-4 ">
                <h1>Featured Projects</h1>
            </div>
            <div className="card mb-3 shadow-xl mr-[20%]" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ weatherPic } className="rounded-xl " alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="https://github.com/travis85/weatherApp"><h5 className="flex justify-center">Weather App</h5></a>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 shadow-xl ml-[20%] mr-2 rounded-xl" >
                <div className="float-right ">
                    <div className="col-md-4 float-right">
                        <img src={ scrabblePic } className="rounded-xl" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="https://github.com/travis85/scrabbleSolverInterview/tree/main"><h1 className="flex justify-center">Scrabble Cheater</h1></a>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 shadow-xl mr-[20%] ml-2 rounded-xl" >
                <div className="row g-0 ">
                    <div className="col-md-4 ">
                        <img src={ toDoListPic } className="rounded-xl " alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="https://github.com/travis85/toDoList"><h2 className="flex justify-center">To do List</h2></a>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}