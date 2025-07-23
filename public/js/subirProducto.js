// Script para subir productos
document.addEventListener("DOMContentLoaded", function () {
  const uploadForm = document.getElementById('uploadForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(this);

      try {
        const res = await fetch('http://localhost:3000/api/productos', {
          method: 'POST',
          body: formData
        });

        if (res.ok) {
          alert('Producto subido correctamente');
          this.reset();
        } else {
          alert('Error al subir el producto');
        }
      } catch (err) {
        console.error(err);
        alert('Error al subir el producto');
      }
    });
  }
});

// Script para enviar cotización
document.addEventListener("DOMContentLoaded", function () {
  const cotizacionForm = document.getElementById('form-cotizacion');
  if (cotizacionForm) {
    cotizacionForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const payload = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('http://localhost:3000/api/cotizacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          alert('Cotización enviada');
          this.reset();
        } else {
          alert('Error al enviar cotización');
        }
      } catch (err) {
        console.error(err);
        alert('Ocurrió un error al enviar la solicitud');
      }
    });
  }
});
