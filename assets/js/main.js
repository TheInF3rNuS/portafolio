document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('mail').value;
      const message = document.getElementById('cajamensaje').value;
  
      // Validación simple
      if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        return;
      }
  
      // Aquí puedes añadir tu lógica para enviar el formulario, por ejemplo, utilizando AJAX o Fetch API
  
      alert('Mensaje Enviado!.');
    });
  });
  