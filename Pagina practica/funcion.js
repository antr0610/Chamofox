function verificarCredenciales() {
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  // Verificar si el usuario y la contraseña son correctos
  if (usuario === "SENA" && password === "SENA") {
    // Redirigir al Landing Page si las credenciales son correctas
    window.location.href = "formulario.html";
  } else {
    // Mostrar una alerta si las credenciales son incorrectas
    alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
  }
}
