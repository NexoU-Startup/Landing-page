// ============================================
// MENÚ HAMBURGUESA - Para celular
// ============================================

// Esta función abre y cierra el menú cuando presionas el botón de las 3 líneas
function toggleMenu() {
  var navLinks  = document.getElementById('nav-links');
  var navBotones = document.getElementById('nav-botones');

  // toggle agrega la clase "activo" si no la tiene, o la quita si ya la tiene
  navLinks.classList.toggle('activo');
  navBotones.classList.toggle('activo');
}


// ============================================
// CERRAR MENÚ al hacer clic en un link
// ============================================

// Seleccionamos todos los links del menú
var todosLosLinks = document.querySelectorAll('.nav-links a');

// Para cada link, cuando lo hacen clic cerramos el menú
todosLosLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    var navLinks   = document.getElementById('nav-links');
    var navBotones = document.getElementById('nav-botones');
    navLinks.classList.remove('activo');
    navBotones.classList.remove('activo');
  });
});


// ============================================
// BOTONES "MÁS INFO" - Cómo funciona
// ============================================

// Guardamos todos los botones "Más info" en una variable
var botonesInfo = document.querySelectorAll('.btn-mas-info');

// Mensajes para cada paso (Busca, Contacta, Recibe)
var mensajesInfo = [
  'Busca: Usa el buscador para encontrar servicios por categoría o palabra clave dentro de tu universidad.',
  'Contacta: Revisa el perfil del estudiante, su portafolio y sus reseñas antes de escribirle.',
  'Recibe: Coordina los detalles del servicio directamente en la plataforma de forma segura.'
];

// Asignamos el mensaje correcto a cada botón según su posición
botonesInfo.forEach(function(boton, indice) {
  boton.addEventListener('click', function() {
    alert(mensajesInfo[indice]);
  });
});


// ============================================
// BOTONES PRINCIPALES - Navbar y Hero
// ============================================

// Botón "Iniciar Sesión"
var btnIniciar = document.querySelector('.btn-iniciar');
btnIniciar.addEventListener('click', function() {
  alert('Próximamente: inicio de sesión en NexoU');
});

// Botón "Registro"
var btnRegistro = document.querySelector('.btn-registro');
btnRegistro.addEventListener('click', function() {
  alert('Próximamente: crea tu cuenta en NexoU');
});

// Botón "Buscar servicio" (Hero)
var btnBuscar = document.querySelector('.btn-buscar');
btnBuscar.addEventListener('click', function() {
  alert('Próximamente: búsqueda de servicios universitarios');
});

// Botón "Ofrecer mis habilidades" (Hero)
var btnOfrecer = document.querySelector('.btn-ofrecer');
btnOfrecer.addEventListener('click', function() {
  alert('Próximamente: publica tus servicios en NexoU');
});

// Botón "Únete gratis" (CTA final)
var btnUnete = document.querySelector('.btn-unete');
btnUnete.addEventListener('click', function() {
  alert('Próximamente: ¡únete gratis a NexoU!');
});


// ============================================
// EFECTO: Navbar cambia de sombra al hacer scroll
// ============================================

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');

  // Si bajamos más de 50 píxeles, le ponemos una sombra más notoria
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
  }
});
