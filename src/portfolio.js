import "./index.css"
import { Project } from "./projectBar";
import ProjectCard from "./projectCard";
let Portfolio = ()=> {
    return(
        <div >
            <div className="portfolioText">I am a newbie in this field. So I don't have many Projects but currently I am working as a Freelancer and so 
            I have done few projects and learning to develop my skills. Here are some of my Projects....</div>
            <div className="portfolioProject">
             <Project />
            </div>
        </div>
    )
}
export default Portfolio;