import React from "react";
import './AgregarAnalisis.css';

const AgregarAnalisis = () =>{
    return(
 <div class="fromProm">
    <div class="form-container">
        <h1>Agregar analisis</h1>

     <div className="form-box">

        <div class="inputTitulo">
            <label for="nombre">Nombre</label>
            <input type="text"placeholder="Ingrese el nombre"required></input>
        </div>

        <div class="inputDecripcion">
            <label for="descripcion">Descripción</label>
            <input type="text"placeholder="Ingrese su descripción"required></input>
        </div>

        <div class="inputPrecio">
            <label for="precio">Precio</label>
            <input type="text"placeholder="Ingrese el precio"required></input>
        </div>

        <div class="inputClaves">
            <label for="clave">Clave de estudios</label>
            <input type="text"placeholder="Ingrese la clave de estudios"required></input>
        </div>

        
         <div className="button-one">
               <button type="button">Agregar</button> 
         </div>
         <div className="button-two">
              <button type="button">Cancelar</button>  
        </div>
            
        
     </div>
    </div>
</div>


    );
}

export default AgregarAnalisis