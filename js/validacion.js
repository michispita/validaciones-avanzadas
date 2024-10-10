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


// obtener el formulario y el checkbox
const modal = document.getElementById('modalTerminos');
const checkbox = document.getElementById('cbterminos');
const form = document.getElementById('form')
const btnTerminos = document.getElementById('btnTerminos');

// validar términos y condiciones
function validateTerms() {
  if (!checkbox.checked) {
    checkbox.setCustomValidity(btnTerminos.classList.add('is-invalid'));
    btnTerminos.style.color = "red";
    document.getElementById("mdlterminos").style.color = "red";
    document.getElementById("terminos").style.color = "red";
  } else {
    checkbox.setCustomValidity("");
  }
}

form.addEventListener('submit', function (event) {
  validateTerms();

  // prevenir el envío si no es valido
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Añadir clase 'was-validated' al formulario para activar estilos de Bootstrap
  form.classList.add('was-validated');
});