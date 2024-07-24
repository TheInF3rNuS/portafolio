document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const contactBtn = document.getElementById('contact-btn');
    const formSection = document.getElementById('formtxt');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('mail');
    const messageField = document.getElementById('cajamensaje');
    const errorContainer = document.createElement('div');
    const profileImg = document.getElementById('profile-img');
    const bangText = document.getElementById('bang-text');

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

    // Cambio de imagen al hacer clic y mostrar texto
    profileImg.addEventListener('click', function() {
        const currentSrc = profileImg.getAttribute('src');
        const newSrc = currentSrc === 'assets/img/VichoAvatarTransparente.PNG' ? 'assets/img/yo.JPG' : 'assets/img/VichoAvatarTransparente.PNG';
        profileImg.setAttribute('src', newSrc);
        
        if (newSrc === 'assets/img/yo.JPG') {
            bangText.style.display = 'block';
        } else {
            bangText.style.display = 'none';
        }
    });
});