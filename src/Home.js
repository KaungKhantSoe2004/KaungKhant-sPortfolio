import { useNavigate } from "react-router-dom";
import "./index.css"
import {FaFacebook, FaTwitter, FaTelegram} from "react-icons/fa";
import ProjectCard from "./projectCard";
import { useEffect, useState } from "react";
import { Skills } from "./servicesBar";
import { Project } from "./projectBar";
const Img = ({src})=> {
    return(
        <div className="imgContainer">
            <img src={src} className="img"/>
        </div>
    )
}

const Buttons = ()=> {
    const navigate  = useNavigate();
const projectClick = ()=> {
    console.log("clicked")
    navigate('/portfolio')
  }
  const hireMeCLick = ()=> {
    console.log("hMclick")
    navigate('./contact')
  }
  return(
  <div className="buttons">
    <button className="hireMe button" onClick={hireMeCLick}>Hire me</button>
    <div className="logoS">
        <FaFacebook className="icons"/>
        <FaTelegram className="icons"/>
        <FaTwitter className="icons"/>
    </div>
    <button className="contact button" onClick={projectClick} >See my projects</button>

        </div>)  
}

const Intro = ()=> {
    return(
        <div className="intro">
            <div className="int">Hi, My name is
          
            </div>
            <div className="name">Kaung Khant Soe</div>
          <div className="text ">
            a web developer, based in Myanmar.I am a front-end developer and UX designer. I
             do remote work for agencies, consulted for startups, and collaborated with talented people to create digital 
             products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually 
             working on improving my chops one design problem at a time. As a designer,I value simple content structure, clean 
             design patterns, and thoughtful interactions and I enjoy designing Webs, Apps, Logos.And as a front-end developer ,I value simple content structure, clean
              design patterns, and thoughtful interactions and always ready to improve the Empoyer's business.I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
          </div>
            
        </div>
    )
}
const HomeLayout = ({setIsOver, isOver})=> {
    const [isLoad, setIsLoad] = useState(true);
    const navigate = useNavigate();
 
  
    return(
  <div className="homeLayout" > <Img src={"https://th.bing.com/th/id/OIP.Nklt1UrHxsbweJ80SNoagQHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} />
    <Intro />
    
<Buttons />

<Skills />

<Project setIsOver={setIsOver} isOver={isOver} />
    </div>
    )
}
export default HomeLayout;