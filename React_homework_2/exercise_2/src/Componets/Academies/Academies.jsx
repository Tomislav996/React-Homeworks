import "./Academies.css"
import Academy from "../Academy/Academy"

const Academies = ({academies, name}) => {

    return (
        <div className="academies-container">
            <h2>{name}</h2>
            <div>
                {academies.map((academy) => {
                    return (
                        <Academy academy={academy}/>
                    )
                })}
            </div>
        </div>
    )
}




export default Academies