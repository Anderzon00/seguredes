window.addEventListener('resize', function() {
    // Actualizar el tamaño del flipbook al redimensionar la ventana
    var flipbook = document.querySelector('.flipbook-viewport .flipbook');
    flipbook.style.width = window.innerWidth + 'px';
    flipbook.style.height = window.innerHeight + 'px';
  });
  
  // Ejecutar el evento resize al cargar la página
  window.dispatchEvent(new Event('resize'));