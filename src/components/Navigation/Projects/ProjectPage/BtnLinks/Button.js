import '../ProjectPage.css'

function Button(props){
    return (
           <button className={props.name}> <a target="_blank" rel="noreferrer" href={props.link}>{props.name}</a></button>
    )
}

export default Button;