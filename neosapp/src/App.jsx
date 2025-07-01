import { useState } from 'react';
import './App.css';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(''); // ✅ agregar
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleAgregarProducto = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !descripcion || !imagen)
      return alert("Completa todos los campos");

    const nuevoProducto = {
      id: productos.length + 1,
      nombre,
      precio, // ✅ incluirlo aquí
      descripcion,
      imagen: URL.createObjectURL(imagen),
    };

    setProductos([...productos, nuevoProducto]);
    setNombre('');
    setPrecio(''); 
    setDescripcion('');
    setImagen(null);
  };

  return (
    <div className="app-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleAgregarProducto} className="formulario">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Precio del producto"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          required
        />
        <button type="submit">Crear Tarjeta</button>
      </form>

      <div className="contenedor-productos">
        {productos.map((prod) => (
          <div key={prod.id} className="tarjeta-producto">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <h4>{prod.precio}</h4>
            <p>{prod.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
