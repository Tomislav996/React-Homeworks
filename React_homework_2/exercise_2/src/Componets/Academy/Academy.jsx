import "./Academy.css"

const Academy = ({academy}) => {

    return (
        <div key={academy.id} className="academy">
            <h3>{academy.name}</h3>
            <p>{academy.description}</p>
        </div>
    )
}

export default Academy;
