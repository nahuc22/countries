import style from "./Card.module.css"
const Card = (props) => {
    return (
        <div className={style.card}>
            <img src={props.imagen} alt=""/>
            <p>Name:{props.nombre}</p>
            <p>Continente:{props.continente}</p>
        </div>
    )
}

export default Card;