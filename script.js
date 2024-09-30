function contactMe() {
    document.getElementById("contact-form").style.display = "block";
    document.getElementById("content").style.display = "none"; // Ocultar contenido anterior
}
function showContactForm() {
    document.getElementById("contact-form").style.display = "block"; // Mostrar el formulario
    document.getElementById("content").style.display = "none"; // Ocultar contenido anterior
}

function sendMessage(event) {
    event.preventDefault(); // Evitar el envío del formulario
    alert("Mensaje enviado. ¡Gracias por contactarme!");
    document.getElementById("contact-form").style.display = "none"; // Ocultar el formulario después de enviar
    document.getElementById("content").style.display = "block"; // Mostrar contenido nuevamente
}

document.getElementById("name").addEventListener("mouseover", function() {
    // Ocultar los logos
    document.querySelectorAll(".cpp-logo, .java-logo, .python-logo, .ruby-logo").forEach(function(logo) {
        logo.style.display = "none";
    });
    // Mostrar el trofeo
    document.querySelector(".trophy").style.display = "block";
});

document.getElementById("name").addEventListener("mouseout", function() {
    // Mostrar los logos
    document.querySelectorAll(".cpp-logo, .java-logo, .python-logo, .ruby-logo").forEach(function(logo) {
        logo.style.display = "block";
    });
    // Ocultar el trofeo
    document.querySelector(".trophy").style.display = "none";
});
function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

function showProjects() {
    document.getElementById("content").innerHTML = `
        <h2>Mis Proyectos</h2>
        <p>Aquí puedes ver una lista de mis proyectos.</p>
    `;
}

function showAbout() {
    document.getElementById("content").innerHTML = `
        <h2>Más Sobre Mí</h2>
        <p>Aquí puedes encontrar información sobre mi experiencia y habilidades.</p>
    `;
}

function contactMe() {
    document.getElementById("content").innerHTML = `
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de mi correo: ejemplo@correo.com</p>
    `;
}

function moreInfo() {
    document.getElementById("content").innerHTML = `
        <h2>Información Adicional</h2>
        <p>Aquí puedes ver más detalles sobre mí y mi trayectoria.</p>
    `;
}

function goHome() {
    document.getElementById("content").innerHTML = `
        <h2>Bienvenido a mi portafolio</h2>
        <p>Selecciona una opción del menú para comenzar.</p>
    `;
}

// Cierra el dropdown si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-content') && !event.target.matches('a')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
