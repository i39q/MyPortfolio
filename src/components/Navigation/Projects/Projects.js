import ProjectsList from "./ProjectsList";

import "./Project.css"
import { NavLink } from "react-router-dom";

function Projects(){
    return(
      <div className="Projects">
          {ProjectsList.map((item,index) => { return (
                  <div className={`${item.ProjectName} item_project`} key={item.ProjectName}>
                    <NavLink to={`/ProjectPage/${index}`}>
                      <img src={item.imgSrc} alt=""/>
                      <p>{item.ProjectName}</p>
                    </NavLink>
                  </div>
          )})}
      </div>
    )
}

export default Projects;