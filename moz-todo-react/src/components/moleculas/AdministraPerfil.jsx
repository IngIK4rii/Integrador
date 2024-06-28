import React from 'react';
import './UserProfile.css'; // Importar el archivo CSS para los estilos

const UserProfile = () => {
  return (
    <div className="profile-container">
      {/* Título principal */}
      <div className="section title-section">
        <h1>Administra tu perfil</h1>
      </div>

      {/* Subtítulo */}
      <div className="section subtitle-section">
        <h2>Vea y actualice su información personal</h2>
      </div>

      {/* Formulario */}
      <section className="form-section">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
          <input type="text" id="apellidoPaterno" name="apellidoPaterno" required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidoMaterno">Apellido Materno:</label>
          <input type="text" id="apellidoMaterno" name="apellidoMaterno" required />
        </div>
        <div className="form-group">
          <label htmlFor="correoElectronico">Correo electrónico:</label>
          <input type="email" id="correoElectronico" name="correoElectronico" required />
        </div>
        <div className="form-group">
          <label htmlFor="numeroTelefonico">Número telefónico:</label>
          <input type="tel" id="numeroTelefonico" name="numeroTelefonico" pattern="\d{10}" required />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Ver Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" required />
        </div>
        <button type="submit">Actualización del perfil</button>
      </section>
    </div>
  );
}

export default UserProfile;
