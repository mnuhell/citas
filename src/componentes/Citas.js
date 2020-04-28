import React from 'react'
import PropTypes from 'prop-types';


const Citas = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintoma: <span>{cita.sintoma}</span></p>
        <button 
        className="button eliminar u-full-width"
        onClick={ () => eliminarCita(cita.id)}
        >Eliminar cita</button>
    </div>
);

Citas.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Citas