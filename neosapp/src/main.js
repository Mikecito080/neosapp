const root = document.getElementById('root');

const createHeader = () => {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'NEOS BELLEZA';
  header.appendChild(title);
  return header;
};

const createMain = () => {
  const main = document.createElement('main');

  const seccionEmpresa = document.createElement('section');
  const tituloEmpresa = document.createElement('h2');
  tituloEmpresa.textContent = 'Acerca de Nosotros';
  const descripcionEmpresa = document.createElement('p');
  descripcionEmpresa.textContent = 'Somos una distribuidora de productos de belleza comprometida con la calidad y el estilo. Inspiramos confianza y elegancia en cada entrega.';
  seccionEmpresa.appendChild(tituloEmpresa);
  seccionEmpresa.appendChild(descripcionEmpresa);

  const seccionPedidos = document.createElement('section');
  const tituloPedidos = document.createElement('h2');
  tituloPedidos.textContent = 'Cómo Hacer Pedidos';
  const instruccionesPedidos = document.createElement('p');
  instruccionesPedidos.textContent = 'Puedes hacer pedidos vía WhatsApp al número +57 312 345 6789 o visitando nuestra tienda en línea (próximamente). También atendemos pedidos en nuestra sede física.';
  seccionPedidos.appendChild(tituloPedidos);
  seccionPedidos.appendChild(instruccionesPedidos);

  const seccionUbicacion = document.createElement('section');
  const tituloUbicacion = document.createElement('h2');
  tituloUbicacion.textContent = 'Dónde Encontrarnos';
  const direccion = document.createElement('p');
  direccion.textContent = 'Estamos ubicados en Usaquén, Bogotá, Colombia. Visítanos para descubrir nuestros productos en persona.';
  seccionUbicacion.appendChild(tituloUbicacion);
  seccionUbicacion.appendChild(direccion);

  main.appendChild(seccionEmpresa);
  main.appendChild(seccionPedidos);
  main.appendChild(seccionUbicacion);

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');

  const contacto = document.createElement('p');
  contacto.textContent = ' Contacto: +57 312 345 6789';

  const redes = document.createElement('p');
  redes.innerHTML = `
     Síguenos: 
    <a href="https://www.instagram.com/neosbelleza" target="_blank" style="color: #d4af37;">Instagram</a> | 
    <a href="https://www.facebook.com/neosbelleza" target="_blank" style="color: #d4af37;">Facebook</a>
  `;

  const derechos = document.createElement('p');
  derechos.textContent = '© 2025 NEOS Belleza. Todos los derechos reservados.';

  footer.appendChild(contacto);
  footer.appendChild(redes);
  footer.appendChild(derechos);

  return footer;
};

// Renderiza la interfaz
root.appendChild(createHeader());
root.appendChild(createMain());
root.appendChild(createFooter());
