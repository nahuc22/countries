import { useState } from "react";

const Form = () =>  {
    const [form, setForm] = useState({
        nombre: "aaaaaaaa   ",
        dificultad:"",
        duracion:"",
        temporada:"",
        paises: []
    });

const changeHandler = (event) => {
    const property = event.target.name ;
    const value = event.target.value;
    console.log({[property]:value})
    setForm({...form,[property]: value})
}
    return (
        <form>
            <div>
                <label>Nombre de la actividad: </label>
                <input type="text" value={form.nombre} onChange={changeHandler} name="nombre"></input>
            </div>

            <div>
                <label>Dificultad: </label>
                <input type="number" min="1" max="5" multiple/>
            </div>

            <div>
                <label>Duracion: </label>
                <input type="time" name="hora" step="3600"/>
            </div>
 
            <div>
                <label>Temporada: </label>
                <select name="enum">
                    <option value="valor1">Opción 1</option>
                    <option value="valor2">Opción 2</option>
                    <option value="valor3">Opción 3</option>
</select>
            </div>  
        </form>
    )
}

export default Form;

/*
Nombre.
Dificultad.
Duración.
Temporada.
Posibilidad de seleccionar/agregar varios países en simultáneo.
Botón para crear la actividad turística.
*/