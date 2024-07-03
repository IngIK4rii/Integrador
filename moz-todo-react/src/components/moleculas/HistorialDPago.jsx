import React from 'react';
import './HistorialDPago.css'; 
import { ImPrinter } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";

function Pagos() {
  
  const handleDelete = (id) => {
    // Implementar la función de eliminar
    console.log(`Eliminar resultado con id: ${id}`);
  };

  const handlePrint = (id) => {
    // Implementar la función de imprimir
    console.log(`Imprimir resultado con id: ${id}`);
  };

  // Suponiendo que los resultados vienen de una fuente de datos
  const resultados = [
    { id: 1, nombre: 'Juan Pérez', fecha: '2023-01-01', resultado: 'Negativo' },
    { id: 2, nombre: 'Ana Gómez', fecha: '2023-02-15', resultado: 'Positivo' }
  ];

  return (
    <div className="resultados-container">
      <h2>Historial de Resultados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Paciente</th>
            <th>Fecha de emisión</th>
            <th>Resultado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No hay resultados disponibles</td>
            </tr>
          ) : (
            resultados.map((resultado) => (
              <tr key={resultado.id}>
                <td>{resultado.nombre}</td>
                <td>{resultado.fecha}</td>
                <td>{resultado.resultado}</td>
                <td className="acciones">

                     <IoIosCloseCircle className='img'/>
                  
                  
                    <ImPrinter className='img'/>
                    
                  
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Pagos;