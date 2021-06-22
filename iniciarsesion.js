const validEmail = "asd@gmail.com";
const validPassword = "123456";

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === validEmail && validPassword === password) {
        //alert("Logueado con éxito");
        window.location.href = "index.html";
    } else {
        //alert("Usuario o contraseña incorrecta");
        document.getElementById("error").innerHTML = "<span>Usuario o contraseña inválido</span>"
    }
}