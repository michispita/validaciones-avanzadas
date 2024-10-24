// Validación de formularios de Bootstrap
(() => {

  'use strict';


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

const formRegistro = document.getElementById('miFormulario');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(event) {
  // Validar si las contraseñas coinciden
  if (password1.value !== password2.value) {
    alert("Las contraseñas no coinciden");
    event.preventDefault();  // Evitar que el formulario se envíe
  }
});

    'use strict'
  
  // Selecciona todos los formularios que necesitan validación personalizada de Bootstrap
  const forms = document.querySelectorAll('.needs-validation');
  

  // Itera sobre ellos y previene el envío si no son válidos
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Validación de contraseñas
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();  // Evita el envío inmediato del formulario

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
  ()

  
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


  var password1 = document.getElementById("password1");
  var password2 = document.getElementById("password2");

  // Verificar si las contraseñas coinciden
  if (password1.value !== password2.value) {
    password2.setCustomValidity("Las contraseñas no coinciden");
    password2.classList.add("is-invalid");
  } else {
    password2.setCustomValidity("");
    password2.classList.remove("is-invalid");
    password2.classList.add("is-valid");
  }

  // Si el formulario es válido, se puede enviar
  if (this.checkValidity()) {
    this.submit();  // Envía el formulario si todo está correcto
  }
});

// Validación de términos y condiciones
const checkbox = document.getElementById('cbterminos');
const form = document.getElementById('form');
const btnTerminos = document.getElementById('btnTerminos');
const mdlTerminos = document.getElementById('mdlterminos');


function validarTerminos() {
  if (!terminos.checked) {
    mostrarError(btnTerminos, 'Debes aceptar los términos.');
    btnTerminos.classList.add('text-danger');
    return false;
  }
  mostrarExito(btnTerminos);
  btnTerminos.classList.remove('text-danger');
  return true;
}

// validar términos y condiciones

function validateTerms() {
  if (!checkbox.checked) {
    // Mensaje de error si no se ha marcado el checkbox
    checkbox.setCustomValidity("Debes aceptar los términos y condiciones");
    mdlTerminos.classList.add("text-danger");
    btnTerminos.classList.add("text-danger");  // Cambia el botón a rojo
    checkbox.classList.add("is-invalid");
  } else {
    checkbox.setCustomValidity("");  // Sin errores si está marcado
    mdlTerminos.classList.remove("text-danger");
    btnTerminos.classList.remove("text-danger");  // Quita el rojo del botón
    checkbox.classList.remove("is-invalid");
  }
}

form.addEventListener('submit', function (event) {
  validateTerms();

  // Prevenir el envío si no es válido
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Añadir clase 'was-validated' al formulario para activar estilos de Bootstrap
  form.classList.add('was-validated');
});
