// Centralized jQuery logic and mock Ajax for ADESCO frontend

$(document).ready(function () {
  // Initialize DataTables
  $('.datatable').DataTable({
    language: {
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      paginate: {
        first: "Primero",
        last: "Último",
        next: "Siguiente",
        previous: "Anterior"
      }
    }
  });

  // Initialize Select2
  $('.select2').select2({
    width: '100%',
    placeholder: 'Seleccione una opción',
    allowClear: true
  });

  // Login form validation
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    let username = $('#username').val().trim();
    let password = $('#password').val().trim();
    let valid = true;

    $('.error-message').text('');

    if (!username) {
      $('#usernameError').text('El usuario es obligatorio').attr('aria-live', 'polite');
      valid = false;
    }
    if (!password) {
      $('#passwordError').text('La contraseña es obligatoria').attr('aria-live', 'polite');
      valid = false;
    }

    if (valid) {
      // TODO: Replace with real authentication in Phase 2
      alert('Login exitoso (simulado)');
      // Redirect or further logic here
    }
  });

  // Mock Ajax for DataTables and other data can be added here for Phase 1

  // Additional UI interactions, modals, etc. can be added here
});
