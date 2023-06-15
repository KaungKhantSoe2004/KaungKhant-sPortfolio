import "./index.js";
import "./index.css"
import { useNavigate } from "react-router-dom";
let About = ()=> {
    const navigate = useNavigate();
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="aboutText"><span>Hello there,</span> My name is Kaung Khant Soe a web developer and UX designer. I
             do remote work for agencies, consulted for startups, and collaborated with talented people to create digital 
             products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually 
             working on improving my chops one design problem at a time. As a designer,I value simple content structure, clean 
             design patterns, and thoughtful interactions and I enjoy designing Webs, Apps, Logos.And as a front-end developer ,I value simple content structure, clean
              design patterns, and thoughtful interactions.I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.

<button className="button con" onClick={()=> {
  navigate("/contact")
}}>Contact Me</button>



          
            </div>
        </div>
    )
}
export default About;