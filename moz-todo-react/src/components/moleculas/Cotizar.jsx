import React from 'react';
import './Cotizar.css';

function Cotizar() {
  return (
    <div className="cotizacion-container">
    <h1>Cotización</h1>
    <div className="content">
      <div className="analisis-escogidos">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="totales">
        <div className="input-group">
          <span>Subtotal:</span>
          <input type="text" className="input-placeholder" placeholder='Subtotal' />
        </div>
        <div className="input-group">
          <span>Total:</span>
          <input type="text" className="input-placeholder" placeholder='Total' />
        </div>
        <button className="cobrar-button">Cobrar</button>
      </div>
    </div>
  </div>
  );
}

export default Cotizar;
