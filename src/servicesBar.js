export  const Skills = ()=> {
    return(
     <div className="skillBars">
      <h2>My skills</h2>
        <div>
            <h3>HTML</h3>
          <div className="container"><div className="html">90%</div></div>  
        </div>
        <div>
            <h3>CSS</h3>
            <div className="container"><div className="css">60%</div></div> 
        </div>
        <div>
            <h3>React</h3>
            <div className="container"><div className="react">60%</div></div>  
        </div>
        <div>
            <h3>JS</h3>
            <div className="container"> <div className="js">50%</div></div> 
        </div>
        <div>
            <h3>UX</h3>
            <div className="container"><div className="ux">50%</div></div>  
        </div>
        <div>
            <h3>UI</h3>
            <div className="container"><div className="ui">40%</div></div>  
        </div>
     
     </div>
    )
}