document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const catalogContainer = document.querySelector('.catalog-container');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = form.nombre.value.trim();
    const categoria = form.categoria.value;
    
    let url = '/api/productos';
    const params = new URLSearchParams();

    if (nombre) params.append('nombre', nombre);
    if (categoria) params.append('categoria', categoria);

    if ([...params].length > 0) {
      url += `?${params.toString()}`;
    }

    try {
      const res = await fetch(url);
      const productos = await res.json();

      // Limpiar resultados anteriores
      catalogContainer.innerHTML = '';

      if (productos.length === 0) {
        catalogContainer.innerHTML = '<p>No se encontraron productos.</p>';
        return;
      }

      // Renderizar productos encontrados
      productos.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h2>${p.nombre}</h2>
    <p>${p.descripcion}</p>
    <p><strong>$${p.precio}</strong></p>
    <button class="cotizar-btn" data-producto="${p.nombre}">Cotizar este producto</button>
  `;
  catalogContainer.appendChild(card);
});
// Escuchar los botones de cotización
document.querySelectorAll('.cotizar-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const nombreProducto = e.target.getAttribute('data-producto');
    const inputProducto = document.querySelector('input[name="producto"]');
    
    if (inputProducto) {
      inputProducto.value = nombreProducto;
      // Hacer scroll suave al formulario
      document.querySelector('#coti').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

    } catch (err) {
      console.error('Error al buscar productos:', err);
      catalogContainer.innerHTML = '<p>Error al cargar productos.</p>';
    }
  });
});
