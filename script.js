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

document.addEventListener("DOMContentLoaded", function () {
    // Mapa de habilidades con sus descripciones
    const descriptions = {
        "network-security": "Implementación de firewalls, sistemas IDS/IPS y VPNs seguras.",
        "server-management": "Administración de servidores Linux y Windows, incluyendo servicios en Docker.",
        "security-audits": "Pruebas de penetración y análisis de vulnerabilidades.",
        "container-management": "Despliegue y configuración de servicios en contenedores Docker.",
        "process-automation": "Desarrollo de scripts para tareas recurrentes y migración de datos.",
        "backups-recovery": "Respaldo y recuperación de datos usando herramientas como Timeshift e IDrive."
    };

    const skillsList = document.getElementById("skills-list");
    const descriptionBox = document.getElementById("description-box");

    // Mostrar descripción al pasar el mouse sobre un elemento
    skillsList.addEventListener("mouseover", function (event) {
        const skillId = event.target.id;

        // Si el elemento tiene una descripción, mostrarla
        if (descriptions[skillId]) {
            const rect = event.target.getBoundingClientRect();
            descriptionBox.textContent = descriptions[skillId];
            descriptionBox.style.display = "block";
            if (window.innerWidth <= 768) {
                // Para móviles y tablets: coloca el description-box debajo del ítem
                descriptionBox.style.position = "absolute";
                descriptionBox.style.left = `${rect.left + window.scrollX}px`;
                descriptionBox.style.top = `${rect.bottom + window.scrollY}px`; // Ajusta para considerar el scroll vertical
                descriptionBox.style.width = `${rect.width}px`; // Igual al ancho del ítem
            } else {
                // Para pantallas grandes: coloca el description-box a la derecha del ítem
                descriptionBox.style.position = "absolute";
                descriptionBox.style.left = `${rect.right}px`;
                descriptionBox.style.top = `${rect.top + window.scrollY}px`; // Ajusta para considerar el scroll vertical
            }
        }
    });

    // Ocultar el mensaje al quitar el mouse
    skillsList.addEventListener("mouseout", function () {
        descriptionBox.style.display = "none";
    });
});
