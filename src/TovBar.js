import "./index.css"

import { NavLink, Outlet } from "react-router-dom";
let Logo = ()=> {
    return(
    <h1>Portfolio</h1>
    )
}
let BigMom = ({children})=> {
    return <div>
        {children};
    </div>
}
let Menu = ()=> {
    return(
        <div className="menuContainer">
            <NavLink to="/" className={({isActive})=> (isActive? "active" : "notActive")}>Home</NavLink>
            <NavLink to="/services" className={({isActive})=> (isActive? "active" : "notActive")}> Services</NavLink>
            <NavLink to="/portfolio" className={({isActive})=> (isActive? "active" : "notActive")}>Portfolio</NavLink>
            <NavLink to="/about" className={({isActive})=> (isActive? "active" : "notActive")}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> (isActive? "active" : "notActive")}>Contact</NavLink>
        </div>
    )
}
let TovBar = ()=> {
    return (
     <div className="body">

        <div className="TovBar">
     <Logo />
     <Menu /> 
    </div>
 
<Outlet />

  </div>   
    )
}
export default TovBar;