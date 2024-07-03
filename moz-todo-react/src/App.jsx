// src/App.js
import React from 'react';
import Navbar from './components/moleculas/Navbar';
import CitaForm from './components/moleculas/Citas';
import Cotizar from './components/moleculas/Cotizar';
import CargarResultados from './components/moleculas/CargarResultados';
import CrearPromocion from './components/moleculas/CrearPromociones';
import UserProfile from './components/moleculas/AdministraPerfil';
import AgregarAnalisis from './components/moleculas/AgregarAnalisis';
import Pagos from './components/moleculas/HistorialDPago';





function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CitaForm/>
     <CargarResultados/> 
       
      
      

      
      

      

      
      
      
      

      
    </div>
  );
}

export default App;
