import { useState } from "react";
import axios from "axios";
const Form = () =>  {
   
const [form, setForm] = useState({
        nombre: "",
        dificultad:"",
        duracion:"",
        temporada:"",
        paisesId: ""
    });

const [errors, setErrors] = useState({
        nombre: "",
        dificultad:"",
        duracion:"",
        temporada:"",
        paisesId: "",
})

const validate = (form) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.nombre)){
        console.log("Si pasa el regex --->", form.nombre);
        setErrors({...errors, nombre:""})
    } else {
        setErrors({...errors, nombre:"Hay un error en el email"})
    }
    if(form.nombre==="") setErrors({...errors,nombre:"Email vacío"})
}

const onChangeHandler = (event) => {
    const property = event.target.name ;    
    const value = event.target.value;
    setForm({...form,[property]: value})
    validate({...form, [property]:value});
}

const onSubmitHandler = (event) => {
     event.preventDefault();
     axios.post("http://localhost:3001/activities/send", form)
     .then(res => alert(res))
     .catch(error => alert(error))
     
}
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Nombre de la actividad: </label>
                <input  type="text" value={form.nombre} onChange={onChangeHandler} name="nombre"></input>
                {errors.nombre && <span>{errors.nombre}</span>}
                
            </div>

            <div>
                <label>Dificultad: </label>
                <input type="number" min="1" max="5" onChange={onChangeHandler} value={form.dificultad} name="dificultad"/>
            </div>

            <div>
                <label>Duracion: </label>
                <input type="number" min="0" max="24"  onChange={onChangeHandler} name="duracion"/>
            </div>
 
            <div>
                <label >Temporada: </label>
                    <select name="temporada" value={form.temporada} onChange={onChangeHandler} >
                        <option value="temporada" >Seleccione temporada</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>  
            <button type="submit">Submit</button>
                </div> 
                <div> 
                <label>ID Pais</label>
                <input
            type="text"
            value={form.paisesId}
            onChange={onChangeHandler}
            name="paisesId"
            ></input>
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