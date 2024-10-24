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

const form = document.getElementById('miFormulario');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(event) {
  // Validar si las contraseñas coinciden
  if (password1.value !== password2.value) {
    alert("Las contraseñas no coinciden");
    event.preventDefault();  // Evitar que el formulario se envíe
  }
});
