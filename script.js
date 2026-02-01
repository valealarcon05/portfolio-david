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

document.getElementById("terminal-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const input = e.target.value.toLowerCase().trim();
        const output = document.getElementById("terminal-output");
        const line = document.createElement("p");
        line.innerHTML = `<span class="prompt">davit@shield:~$</span> ${input}`;
        output.appendChild(line);

        const response = document.createElement("p");
        response.style.color = "#888"; // Color para la respuesta del sistema

        switch(input) {
            case 'sudo access':
    response.style.color = "#ffbd2e"; // Color amarillo para advertencia/sistema
    response.innerHTML = "Iniciando bypass de seguridad... <br> [OK] Acceso concedido al nivel Root. <br> Desbloqueando datos de contacto...";
    
    // Esta es la línea mágica que ya tenés en tu validación de contraseña
    document.getElementById("contact-details").style.display = "block";
    
    // Opcional: Desplazar la pantalla automáticamente hacia los datos de contacto
    setTimeout(() => {
        document.getElementById("contact-details").scrollIntoView({ behavior: 'smooth' });
    }, 1000);
    break;
            case 'help':
                response.innerHTML = "Comandos disponibles: <br>- <b>about</b>: Información del dueño<br>- <b>skills</b>: Lista de habilidades técnicas<br>- <b>clear</b>: Limpiar terminal";
                break;
            case 'about':
                response.innerText = "David: Técnico especializado en implementar sistemas seguros y prevenir amenazas.";
                break;
            case 'skills':
                response.innerText = "Habilidades detectadas: Seguridad de Redes, Docker, Auditorías, Automatización.";
                break;
            case 'clear':
                output.innerHTML = "";
                response.innerText = "";
                break;
            default:
                response.innerText = `Comando '${input}' no reconocido. Escribe 'help'.`;
        }
        
        output.appendChild(response);
        e.target.value = "";
        document.getElementById("terminal-body").scrollTop = document.getElementById("terminal-body").scrollHeight;
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
