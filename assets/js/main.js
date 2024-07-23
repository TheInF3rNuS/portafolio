document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const contactBtn = document.getElementById('contact-btn');
  const formSection = document.getElementById('form');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('mail');
  const messageField = document.getElementById('cajamensaje');
  const errorContainer = document.createElement('div');
  form.insertBefore(errorContainer, form.firstChild);

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del formulario

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const message = messageField.value.trim();

      // Limpiar mensajes de error anteriores
      errorContainer.innerHTML = '';

      // Validación
      let valid = true;
      if (name === '' || email === '' || message === '') {
          errorContainer.innerHTML += '<p>Por favor, complete todos los campos.</p>';
          valid = false;
      }
      if (!validateEmail(email)) {
          errorContainer.innerHTML += '<p>Por favor, ingrese un correo electrónico válido.</p>';
          valid = false;
      }

      if (valid) {
          // Limpiar el formulario
          nameField.value = '';
          emailField.value = '';
          messageField.value = '';
          // Mostrar mensaje de éxito
          errorContainer.innerHTML += '<p>Mensaje enviado exitosamente!</p>';
          errorContainer.style.color = 'white';
      }
  });

  contactBtn.addEventListener('click', function() {
      formSection.scrollIntoView({ behavior: 'smooth' });
  });

  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
});