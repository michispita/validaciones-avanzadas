// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío inmediato del formulario
  
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");
    var errorPassword = document.getElementById("errorPassword");
  
    // Verificar si las contraseñas coinciden
    if (password1.value !== password2.value) {
      password2.setCustomValidity("Las contraseñas no coinciden");
      errorPassword.style.display = "block";
      errorPassword.textContent = "Las contraseñas no coinciden";
      password2.classList.add("is-invalid");
    } else {
      password2.setCustomValidity("");
      password2.classList.remove("is-invalid");
      password2.classList.add("is-valid");
    }
  
    // Si el formulario es válido, se puede enviar
    if (this.checkValidity()) {
      this.submit();  // Envía el formulario si ok
    }
  });
  
