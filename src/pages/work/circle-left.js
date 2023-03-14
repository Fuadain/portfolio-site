import React from "react"
import workData from "../../data/work-data"

export default function CircleLeft() {
    const leftCircleElements = workData.map(work=>{
        return (
        <div>
            <h2>{work.name}</h2>
            <p>{work.title}</p>
            <p>{work.duration}</p>
        </div>
        )
    })
    return(
        <div className="leftCircle">
            {leftCircleElements}
        </div>
    )
}