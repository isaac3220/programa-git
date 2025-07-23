document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Previene el envío tradicional

  const correo = document.getElementById("email").value;
  const contraseña = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correo, contraseña }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Inicio de sesión exitoso");
      // Aquí puedes guardar el token si usas JWT
      // localStorage.setItem("token", data.token);
      window.location.href = "/catalogo.html";
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert("Ocurrió un error al conectar con el servidor");
  }
});
document.getElementById("pepe").addEventListener("click", (e)=>{
e.preventDefault();
window.location.href = "/registrarse.html";
})