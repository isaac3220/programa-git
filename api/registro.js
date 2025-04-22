document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('register-name').value;
    const correo = document.getElementById('register-email').value;
    const contrasena = document.getElementById('register-password').value;
    

    if (!nombre || !correo || !contrasena || !edad) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      const respuesta = await fetch('http://localhost:3000/api/usuarios/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, correo, edad, contrasena })
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        alert('¡Registro exitoso!');
        form.reset(); // limpia el formulario
        // Redirigir o mostrar mensaje adicional si deseas
      } else {
        alert(`Error: ${data.mensaje}`);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Ocurrió un error al registrar el usuario.');
    }
  });
});
