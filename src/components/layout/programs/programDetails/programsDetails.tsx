
interface system {
    name: string
    src: string
    link: string
    description: string
}
export default function programsDetails(props:system): JSX.Element {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.src}/>
            <a href={props.link} ></a>
            <p>{props.description}</p>
        </div>
    )
}