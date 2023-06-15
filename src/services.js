import "./index.css";
import {CgWebsite} from "react-icons/cg"
import {SiDesignernews} from "react-icons/si"
import { Skills } from "./servicesBar";
let Services = ()=> {
    return (
        <div className="servicesContainer">
            <h2 className="hs">
                 My Services
            </h2>
           <div className="services">
<div className="web">
<CgWebsite className="icons "/>
<h3>Front-end Developer</h3>
<div className="webText tt">As a designer,I value simple content structure, clean 
             design patterns, and thoughtful interactions and I enjoy designing Webs, Apps and Logos.</div>
</div>
<div className="design">
<SiDesignernews  className="icons"/>  
<h3>UI/UX designer</h3>
<div className="designText tt">As a front-end developer ,I value simple content structure, clean
              design patterns, and thoughtful interactions and always ready to improve the Empoyer's business</div>
</div>

           </div>
          <div className="skillsContainer"><Skills /></div>
        </div>
    )
}
export default Services;