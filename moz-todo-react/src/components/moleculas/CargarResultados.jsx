import React from 'react';
import './CargarResultados.css';

const CargarResultados = () => {
  return (
    <div className="container">
      <div className="form-section">
        <div className="search-section">
          <label htmlFor="user-search">Busca al Usuario</label>
          <input type="text" id="user-search" placeholder="Busca al Usuario" />
        </div>
        <div className="patient-info">
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="input-group">
            <label htmlFor="apellido-paterno">Apellido Paterno</label>
            <input type="text" id="apellido-paterno" placeholder="Ingresa tu apellido paterno" />
          </div>
          <div className="input-group">
            <label htmlFor="apellido-materno">Apellido Materno</label>
            <input type="text" id="apellido-materno" placeholder="Ingresa tu apellido materno" />
          </div>
        </div>
        <div className="file-upload">
          <label>Arrastra los archivos</label>
          <input type="file" />
        </div>
        <button>Cargar</button>
      </div>
      <div className="document-view">
        <label>Vista del documento</label>
        <div className="document-placeholder"></div>
      </div>
    </div>
  );
};

export default CargarResultados;
