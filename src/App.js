import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './componentes/Fomulario';
import Citas from './componentes/Citas';

function App() {


  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  
  if(!citasIniciales){
    citasIniciales = []
  }

  const [ citas, guardarCitas ] = useState(citasIniciales);

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  })

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    guardarCitas(nuevasCitas)
  }

  const mensajeCitas = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
        <h1>Adinistracion de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario 
               crearCita={crearCita} 
              />
            </div>
            <div className="one-half column"> 
              <h2 className="title">{mensajeCitas}</h2>
              {citas.map(cita => (
                  <Citas
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                  />  
                ))
              }  
              </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
