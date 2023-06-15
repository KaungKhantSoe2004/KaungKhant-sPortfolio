import ProjectCard from "./projectCard"
export const Project = ({setIsOver, isOver})=> {
    return(
        <div className="projectContainer">
            <h2>My Projects</h2>
            <div className="project">
            <ProjectCard text={"KaungKhant's Movie website "} imgLink={"https://th.bing.com/th/id/OIP.zZ-IPJfHX5tqsJCzj0TbogHaEr?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/>
<ProjectCard  text={"Student Add form"} imgLink ={"https://staticresources123.myfor.ms/site/other/landings/education-forms/education-form.png?v=2"}/>
<ProjectCard text={"Game Shop"} imgLink={"https://th.bing.com/th/id/OIP.EdK6A8dCCIh2wX9hHlFImQHaFj?w=276&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/>
<ProjectCard text={"E-commerce Website"} imgLink={"https://th.bing.com/th/id/OIP.sUsZwSEt6VL3ADkmHZQpsQHaF2?w=256&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/>
<ProjectCard text={"Manga Website"} 
imgLink={"https://th.bing.com/th?q=Manga+Websites+Free&dc=2&w=100&h=100&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=MM&setlang=en&adlt=moderate&t=1&mw=247"} />
<ProjectCard text={"Weather Website"} imgLink={"https://th.bing.com/th/id/OIP.RoeMGAHBBtSS08pz_Cag8gHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/>
            </div>


        </div>
    )  
}