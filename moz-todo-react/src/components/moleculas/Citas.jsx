import React from 'react';
import './Citas.css';

const CitaForm = () => {
  return (
    <div className="form-container">
      <h2>Programa una Cita</h2>
      <div className="form-section">
        <h3>Sobre el paciente</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label>Apellido Paterno</label>
            <input type="text" placeholder="Ingresa tu apellido paterno" />
          </div>
          <div className="form-group">
            <label>Apellido Materno</label>
            <input type="text" placeholder="Ingresa tu apellido materno" />
          </div>
          <div className="form-group">
            <label>Fecha de nacimiento</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Género</label>
            <select>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="+52 (987) 123 45 67" />
          </div>
          <div className="form-group form-group-full">
            <label>Dirección</label>
            <input type="text" placeholder="Calle" />
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
      <button>Agendar</button>
    </div>
  );
};

export default CitaForm;

