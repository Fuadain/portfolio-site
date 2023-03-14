import React from "react"
import projectData from "../../data/project-data"
import './circle-right.css';
import circle from "../../images/test-circle.png"
import styled, {keyframes} from 'styled-components'

//done outside CircleRight to prevent error
const spin = (setFrames) => keyframes`@keyframe ${setFrames}`;
const CircleAnimate = styled.img`
    animation: ${props => spin(props.keyframe)} 2s linear infinite;
    z-index: -1;
    position: absolute;
    left: -2050px;
    top: -500px;
    width:1300px;
    height:1300px;
`;

const moveCircleElement = () => keyframes`@keyframe 
    from {transform: rotate(${props=>((props.index - props.prevFocus) * 20 + 130)}deg);}
    to {transform: rotate(${props=>((props.index - props.focusOn) * 20 + 130)}deg);}
`
const CircleElement = styled.div`
    position:absolute;
    left: -600px;
    top: -50%;
    transform: rotate(${props=>((props.index - props.focusOn) * 20 + 130)}deg);
    animation: ${props => moveCircleElement(props)} 6s linear 1;
    

    width:1200px;
    height:1200px;
    border-radius:100%;
    border: 2px #4A437F dashed;

    z-index: -1;


`;

const moveElementText = (props) => keyframes`@keyframe
    from{transform: rotate(${props=>((props.index - props.prevFocus) * -20 - 130)}deg);}
    to{transform: rotate(${props=>((props.index - props.focusOn) * -20 - 130)}deg);}
`

const ElementText = styled.h2`
transform: rotate(${props=>((props.index - props.focusOn) * -20 - 130)}deg);
animation: ${props => moveElementText(props)} 6s linear 1;
width:300px;
height:150px;
background-color:red;
`

export default function CircleRight() {

    const [circleKeyframes, setCircleKeyframes] = React.useState(``)
    const [rotationFocus, setRotationFocus] = React.useState(0)
    const [prevFocus, setPrevFocus] = React.useState(0)

    let index = 0
    const rightCircleElements = projectData.map(project=>{
        //onClick uses index's current value for some reason
        const num = index
        const element = (
            <CircleElement key={project.name} index={index} focusOn={rotationFocus} prevFocus={prevFocus}>
                <ElementText 
                    index={index}
                    focusOn={rotationFocus}
                    onClick={()=>rotateToElement(num)}
                    prevFocus={prevFocus}
                >
                    {project.name}
                </ElementText>
            </CircleElement>
            )
        index++
        return element
    })

    

    function beginRotate(){
        setCircleKeyframes(`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        `)
    }

    function rotateToElement(num) {
        setPrevFocus(rotationFocus)
        setRotationFocus(num)
    }

    return(
        <div className="right-circle">
            <CircleAnimate 
                keyframe={circleKeyframes}
                src={circle}  
                alt="circle" 
                onClick={beginRotate}
            />
            {rightCircleElements}
        </div>
    )
}