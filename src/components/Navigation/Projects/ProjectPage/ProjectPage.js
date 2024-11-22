import { useParams } from "react-router-dom";
import ProjectsList from "../ProjectsList";

import Button from "./BtnLinks/Button";

import './ProjectPage';

function ProjectPage(){
    const {id} = useParams();
    const Project = ProjectsList[id]
    return(
        <div className="container_show_project">
            <div className="show_project">
                <div className={`${Project.ProjectName} show_item_project`} key={Project.ProjectName}>
                    <p>{Project.ProjectName}</p>
                    <img src={Project.imgSrc} alt=""/>
                 </div>

                <div className="source_links">
                    <Button name={Project.obj[0].name} link={Project.obj[0].link} key={Project.obj[0].name}/>

                    { Project.obj[1].link && <Button name={Project.obj[1].name} link={Project.obj[1].link} key={Project.obj[1].name}/> }
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;