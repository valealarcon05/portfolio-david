// document.getElementById("submit-password").addEventListener("click", function () {
//    const password = document.getElementById("password").value;
//    const contactDetails = document.getElementById("contact-details");
//    if (password === "seguridad2024") {
//        contactDetails.style.display = "block";
//    } else {
//        alert("Contraseña incorrecta. Inténtalo de nuevo.");
//    }
// });


//Contraseña original
const originalPassword = "Docker*fan";

//Encriptado
const encryptedPassword = CryptoJS.SHA256(originalPassword).toString();

//Validacion
document.getElementById("submit-password").addEventListener("click", function () {
    const userPassword = document.getElementById("password").value;
    const userEncryptedPassword = CryptoJS.SHA256(userPassword).toString();

    if (userEncryptedPassword === encryptedPassword) {
        //Se desbloquea contacto
        document.getElementById("contact-details").style.display = "block";
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
});