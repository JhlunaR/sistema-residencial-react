import React, { useState } from 'react';
import './Pagos.css'; // Archivo de estilos (opcional)

function PagosSimulados() {
  const [pagoExitoso, setPagoExitoso] = useState(false);
  const [datosTarjeta, setDatosTarjeta] = useState({
    numero: '',
    nombre: '',
    vencimiento: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosTarjeta(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos un retraso de red
    setTimeout(() => {
      setPagoExitoso(true);
    }, 1500);
  };

  return (
    <div className="pago-container">
      <h2>Pago de Cuota Residencial</h2>
      
      {!pagoExitoso ? (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Número de Tarjeta</label>
            <input 
              type="text" 
              name="numero"
              value={datosTarjeta.numero}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              pattern="[0-9\s]{16,19}"
              required
            />
          </div>

          <div className="input-group">
            <label>Nombre en la Tarjeta</label>
            <input 
              type="text" 
              name="nombre"
              value={datosTarjeta.nombre}
              onChange={handleChange}
              placeholder="JUAN PEREZ"
              required
            />
          </div>

          <div className="flex-row">
            <div className="input-group">
              <label>Vencimiento</label>
              <input 
                type="text" 
                name="vencimiento"
                value={datosTarjeta.vencimiento}
                onChange={handleChange}
                placeholder="MM/AA"
                pattern="\d{2}/\d{2}"
                required
              />
            </div>

            <div className="input-group">
              <label>CVV</label>
              <input 
                type="text" 
                name="cvv"
                value={datosTarjeta.cvv}
                onChange={handleChange}
                placeholder="123"
                pattern="\d{3}"
                required
              />
            </div>
          </div>

          <button type="submit">Pagar $500 MXN</button>
        </form>
      ) : (
        <div className="pago-exitoso">
          <div className="checkmark">✓</div>
          <h3>¡Pago Exitoso!</h3>
          <p>Recibirás un comprobante por correo.</p>
          <button onClick={() => setPagoExitoso(false)}>
            Realizar otro pago
          </button>
        </div>
      )}
    </div>
  );
}

export default PagosSimulados;