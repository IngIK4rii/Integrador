import React from "react";
import './CrearPromociones.css';

const CrearPromocion = () => {
  return (
    <div className="crear-promocion">
      <h1>Crear Promoción</h1>
      <div className="upload-container">
        <input type="file" id="file-upload" className="file-upload" />
        <label htmlFor="file-upload" className="file-upload-label">
          <i className="fas fa-upload"></i>
          <span>Cargar la imagen</span>
        </label>
      </div>
      <div className="buttons">
        <button className="button agregar">Agregar</button>
        <button className="button cancelar">Cancelar</button>
      </div>
    </div>
  );
}

export default CrearPromocion;
