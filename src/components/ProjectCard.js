import React from 'react'
//     const weatherProject = {
//       photo: weatherPic,
//       UrlLink: "https://weather-app-4a90b.web.app",
//       description: "A React framework app that takes the input of a city, makes an API call and returns today's date, degrees in Fahrenheit, and the weather (cloudy, rainy, sunny, snow)"
//     }
//     const budgetProject = {
//       photo: budgetPic,
//       UrlLink: "https://budget-app-cd7b1.web.app/",
//       description: "React framework that utilizes local storage to keep track of user's budget"
//     }
  
//     const toDoListProject = {
//       photo: toDoListPic,
//       UrlLink: "https://react-to-do-754f3.web.app/",
//       description: "A memory persistent React app that utilizes user email and password authentication"
//     }
//     const projectsArray = [weatherProject, budgetProject, toDoListProject]

export default function ProjectCard({ project }) {
    return (
        <div className="card mb-3 shadow-xl mr-[20%] ml-1 rounded-xl bg-gradient-to-r from-blue-500 to-blue-200" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={project.photo } className="rounded-xl " alt="..."/>
                </div>
                <div className="col-md-8 ">

                    <div className="card-body">
                        <a href={project.UrlLink}><h5 className=" flex justify-center italic font-semibold text-4xl hover:-translate-y-1 hover:scale-110 hover:animate-bounce text-blue-800">City Weather Checker</h5></a>
                        <div className="flex justify-center mt-10" >
                            <p className="text-2xl p-4">{project.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    
  )
}
        //     {projectsArray.map((project, idx) => { */}
        {/* //     const shouldFloatRight = !(idx % 2 === 0)
        //     console.log(shouldFloatRight)
        //     const tailwindFloatRight = shouldFloatRight ? "float-right" : ''

        //         return (
        //         <div className={tailwindFloatRight}>
        //             <ProjectCard project={project} />

        //       </div>
        //     ) */}
