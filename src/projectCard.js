import { useState } from "react"

export default function ProjectCard ({text, imgLink}) { const [isOver, setIsOver]= useState(false);
    const handleMouseOver = ()=> {
        setIsOver(true)
    }
    const handleMouseOut = ()=> {
        setIsOver(false)
    }
    return (
       
        <div className="projectCard" 
        onMouseOut={()=> {
        handleMouseOut();
        }}
        onMouseOver={()=> {
            handleMouseOver();
        }}>

{
   isOver?  <i className="projectText">{text}</i>: <img src={imgLink} className="projectImg"></img> 
}
        </div>
    )
}

