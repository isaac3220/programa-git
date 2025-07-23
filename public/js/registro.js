document.getElementById("btnRegistro").addEventListener("click", async () => {
  const nombre = document.getElementById("register-name").value;
  const correo = document.getElementById("register-email").value;
  const contraseña = document.getElementById("register-password").value;
  const edad = document.getElementById("register-age").value;

  if (!nombre || !correo || !contraseña || !edad) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, contraseña })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registro exitoso");
      window.location.href = "menu.html"; // Ajusta si el nombre es diferente
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    alert("Error al conectar con el servidor");
    console.error(error);
  }
});
