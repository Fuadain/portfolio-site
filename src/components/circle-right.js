import React from "react"
import projectData from "../data/project-data"

export default function CircleRight() {
    const rightCircleElements = projectData.map(project=>{
        return (
        <div>
            <h2>{project.name}</h2>
        </div>
        )
    })
    return(
        <div className="rightCircle">
            {rightCircleElements}
        </div>
    )
}