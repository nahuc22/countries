import style from "./Card.module.css"
const Card = (props) => {
    return (
        <div className={style.card}>
            <p>Name:{props.nombre}</p>
            <p>Imagen:{props.imagen}</p>
            <p>Continente:{props.continente}</p>
            <p>Capital:{props.capital}</p>
            <p>Subregion:{props.subregion}</p>
            <p>Area:{props.area}</p>
            <p>Poblacion:{props.poblacion}</p>
        </div>
    )
}

export default Card;