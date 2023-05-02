import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import {useSelector} from "react-redux";

const CardsContainer = () => {
    const paises = useSelector(state => state.paises)
    return (
        <div className={style.container}>
            {paises.map(pais => {
                return <Card
                key = {pais.id}
                id = {pais.id}
                nombre = {pais.nombre}
                imagen = {pais.imagen}
                continente = {pais.continente}
                capital = {pais.capital}
                subregion = {pais.subregion}
                area = {pais.area}
                poblacion = {pais.poblacion}
                />
            })}
        </div>
    )
}

export default CardsContainer;