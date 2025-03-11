const toggle = document.getElementById("theme-toggle");

// Verificamos si hay una preferencia guardada en el localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true; // Marcamos el checkbox si el modo oscuro está activado
}

// Event listener para el toggle
toggle.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark"); // Guardamos la preferencia en el localStorage
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light"); // Guardamos la preferencia en el localStorage
    }
});