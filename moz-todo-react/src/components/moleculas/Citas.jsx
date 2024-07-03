import React from 'react';
import './Citas.css'; // Asegúrate de que el archivo CSS está en la misma carpeta

const CitaForm = () => {
  return (
    <div className="form-container">
      <h2>Formulario de Registro</h2>
      <div className="form-section">
        <h3>Sobre el paciente</h3>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="apellido-paterno">Apellido Paterno</label>
            <input type="text" id="apellido-paterno" placeholder="Ingresa tu apellido paterno" />
          </div>
          <div className="form-group">
            <label htmlFor="apellido-materno">Apellido Materno</label>
            <input type="text" id="apellido-materno" placeholder="Ingresa tu apellido materno" />
          </div>
          <div className="form-group">
            <label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
            <input type="date" id="fecha-nacimiento" />
          </div>
          <div className="form-group">
            <label htmlFor="genero">Género</label>
            <select id="genero">
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" placeholder="+52 (967) 123 45 67" />
          </div>
          <div className="form-group form-group-full">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" placeholder="Calle" />
          </div>
          <div className="form-group form-group-full">
            <label htmlFor="colonia">Colonia</label>
            <select id='colonia'></select>
            
          </div>
          <div className="form-group form-group-full">
            <label htmlFor="barrio">Clave Postal</label>
            <input type="text" id="barrio" placeholder="Ingresa tu clave postal" />
          </div>
          <div className="form-group form-group-full">
            <label htmlFor="numero-calle">Número de Calle</label>
            <input type="text" id="numero-calle" placeholder="Ingresa tu número de calle" />
          </div>
        </div>
      </div>

      {/*Parte de tiempo y analisis*/ }
     <div className="form-sections">
        <div className="date-time-group">
          <h3>Elige tu tiempo</h3>
          <div className="form-groups">
            <label htmlFor="date">Fecha</label>
            <div className="input-container">
              <input type="date" id="date" name="date" />
            </div>
          </div>
          <div className="form-groups">
            <label htmlFor="time">Hora</label>
            <div className="input-container">
              <input type="time" id="time" name="time" defaultValue="12:30" />
            </div>
          </div>
        </div>
        <div className="analysis-groups">
          <h3>Añadir motivos</h3>
          <div className="form-groups">
            <label htmlFor="file">Sube tu solicitud de estudios médicos</label>
            <div className="input-container">
              <input type="file" id="file" name="file" />
              <span className="icon">📁</span>
            </div>
          </div>
          <div className="form-groups">
            <label htmlFor="analysis">Elige tus análisis</label>
            <div className="input-container">
              <select id="analysis" name="analysis">
                <option value="analisis-de-sangre">Análisis de sangre</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button className="left-align-button">Agendar</button>

    </div>  
    
  );
}

export default CitaForm;


