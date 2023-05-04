import { useState } from "react";

const Form = () =>  {
   
const [form, setForm] = useState({
        nombre: "",
        dificultad:"",
        duracion:"",
        temporada:"",
        paises: []
    });

const [errors, setErrors] = useState({
        nombre: "",
        dificultad:"",
        duracion:"",
        temporada:"",
        paises: []
})

const validate = (form) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.nombre)){
        console.log("Si pasa el regex --->", form.nombre);
        setErrors({...errors, nombre:""})
    } else {
        console.log("No pasa una shit el regex");
        setErrors({...errors, nombre:"Hay un error en el email"})
    }
    if(form.nombre==="") setErrors({...errors,nombre:"Email vacío"})
}

const onChangeHandler = (event) => {
    const property = event.target.name ;    
    const value = event.target.value;
    console.log({[property]:value})
    setForm({...form,[property]: value})
    validate({...form, [property]:value});
}

const onSubmitHandler = () => {
    
}
    return (
        <form>
            <div>
                <label>Nombre de la actividad: </label>
                <input type="text" value={form.nombre} onChange={onChangeHandler} name="nombre"></input>
                {errors.nombre && <span>{errors.nombre}</span>}
                
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
            <button type="submit"></button>
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