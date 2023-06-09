import "./Card.css"

const Card = ({title, content, imageUrl}) => {

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <img className="images" src={imageUrl} alt="" />
     </div>
    )

}

export default Card;