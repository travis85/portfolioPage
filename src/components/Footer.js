import React from "react";
import { Card,Button } from "react-bootstrap";
import weatherPic from '../assets/weatherPic.jpeg'
import toDoListPic from '../assets/toDoListPic.png'
import budgetPic from '../assets/budgetPic.jpeg'

export default function Footer() {
    


    return (
        <>
        <div className="grid grid-rows-1 place-content-center mb-8 mt-8 md:hidden">
            <h1 className="italic text-blue-900 underline underline-offset-1 text-4xl font-semibold">Featured Projects</h1>

        </div>   

        <div className="grid grid-cols place-content-center gap-4 md:hidden">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={weatherPic} />
            <Card.Body>
            <Card.Title>City Weather Checker</Card.Title>
            <Card.Text>
                A React framework that takes the input of a city,
                and returns a seven day forecast.
            </Card.Text>
            <Button  href="https://weather-app-4a90b.web.app" variant="primary">Check it Out!</Button>
            </Card.Body>
        </Card>
                
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={budgetPic} />
            <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
                A React framework that utilizes local storage to keep track of user's budget
            </Card.Text>
            <Button href="https://budget-app-cd7b1.web.app/" variant="primary">Check it Out!</Button>
            </Card.Body>
        </Card>
                
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={toDoListPic} />
            <Card.Body>
            <Card.Title>To-do-List</Card.Title>
            <Card.Text>
                A React framework that utilizes local storage to keep track of user's budget
            </Card.Text>
            <Button href="https://react-to-do-754f3.web.app/" variant="primary">Check it Out!</Button>
            </Card.Body>
        </Card>

        </div>
            

        {/* MD BREAKPOINT */}
        <div className="hidden md:grid grid-col grid-row-4 mt-20" >
         <div className="md:grid grid-rows-1 place-items-center text-blue-500 text-4xl  font-semibold mb-4 ">
                <h1 className= "underline-offset-1 text-4xl font-semibold italic text-blue-900 underline " >Featured Projects</h1>
         </div>
          
            <div className="card mb-4 shadow-xl mr-[20%] ml-1 rounded-xl bg-gradient-to-r from-blue-500 to-blue-200" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ weatherPic } className="h-80 aspect-square rounded-xl " alt="..."/>
                    </div>
                    <div className="col-md-8 ">

                        <div className="card-body">
                            <a href="https://weather-app-4a90b.web.app"><h5 className="md:flex justify-center italic font-semibold text-4xl hover:-translate-y-1 hover:scale-110 hover:animate-bounce text-blue-800">City Weather Checker</h5></a>
                            <div className="flex justify-center mt-10" >
                                <p className="hidden sm:block text-2xl p-4">A React framework app that takes the input of a city, makes an API call and returns today's date, degrees in Fahrenheit, and the weather (cloudy, rainy, sunny, snow).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4 shadow-xl ml-[20%] mr-1 rounded-xl bg-gradient-to-l from-blue-500 to-blue-200" >
                <div className=" float-right ">
                    <div className="float-right">
                        <img src={ budgetPic } className="h-80 aspect-square rounded-xl " alt="..."/>
                    </div>
                    <div className="col-md-8">
                    
                        <div className="card-body">
                            <a href="https://budget-app-cd7b1.web.app/"><h1 className=" flex justify-center italic font-semibold text-4xl hover:-translate-y-1 hover:scale-110 hover:animate-bounce text-blue-800">Budget Tracker</h1></a>
                            <div className="flex justify-center mt-10 text-2xl p-4">
                                <p className="">React framework that utilizes local storage to keep track of user's budget</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4 shadow-xl mr-[20%] ml-1 rounded-xl bg-gradient-to-r from-blue-500 to-blue-200" >
                <div className="row g-0 ">
                    <div className="col-md-4 ">
                        <img src={ toDoListPic } className="aspect-square rounded-xl h-80" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="https://react-to-do-754f3.web.app/"><h2 className="flex justify-center italic font-semibold text-4xl text-blue-800 hover:-translate-y-1 hover:scale-110 hover:animate-bounce">To-do-List</h2></a>
                            <div className="flex justify-center mt-10 text-2xl p-4">
                                <p className="">A memory persistent React app that utilizes user email and password authentication </p>

                            </div>

                        </div>
                    </div>
                 </div>
             </div>


            </div> 
            </>
    )
}