import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintoma : '',
    });
    const [error, actualizarError] = useState(false)

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintoma } = cita;

    const submitCita = e => {
        e.preventDefault();
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
           hora.trim() === '' || sintoma.trim() === '') {
            actualizarError(true)
            return
        }
        actualizarError(false);
        cita.id = uuidv4();

        crearCita(cita)

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintoma : '',
        });
    }

    return (
        <Fragment>
        <h2 className="title">Crear Cita</h2>
        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
        <form 
        onSubmit={submitCita}
        >
        <label htmlFor="">Nombre Mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre mascota"
                onChange={actualizarState}
                value={mascota}
             />
             <label htmlFor="">Nombre dueño</label>
             <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño mascota"
                onChange={actualizarState}
                value={propietario}
             />
             <label htmlFor="">Fecha</label>
             <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
             />
             <label htmlFor="">Hora</label>
             <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
             />
             <label htmlFor="">Síntomas</label>
             <textarea
             name="sintoma"
             placeholder="Escribe una pequeña descripción de los sintomas"
             className="u-full-width"
             onChange={actualizarState}
             value={sintoma}
             >
             </textarea>

             <button
                type="submit"
                className="u-full-width button-primary"
             >
                 Agregar cita
             </button>

        </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;