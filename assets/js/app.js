// Centralized jQuery logic and mock Ajax for ADESCO frontend
(function ($) {
  'use strict';

  // Cache selectors
  const $datatable = $('.datatable');
  const $select2 = $('.select2');
  const $loginForm = $('#loginForm');
  const $username = $('#username');
  const $password = $('#password');
  const $usernameError = $('#usernameError');
  const $passwordError = $('#passwordError');
  const $errorMessages = $('.error-message');

  // Initialize DataTables with Spanish language
  const initDataTables = () => {
    if ($datatable.length) {
      $datatable.DataTable({
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
    }
  };

  // Initialize Select2 dropdowns
  const initSelect2 = () => {
    if ($select2.length) {
      $select2.select2({
        width: '100%',
        placeholder: 'Seleccione una opción',
        allowClear: true
      });
    }
  };

  // Validate login form
  const validateLoginForm = () => {
    let valid = true;
    $errorMessages.text('');

    if (!$username.val().trim()) {
      $usernameError.text('El usuario es obligatorio').attr('aria-live', 'polite');
      valid = false;
    }
    if (!$password.val().trim()) {
      $passwordError.text('La contraseña es obligatoria').attr('aria-live', 'polite');
      valid = false;
    }
    return valid;
  };

  // Bind events
  const bindEvents = () => {
    if ($loginForm.length) {
      $loginForm.on('submit', (e) => {
        e.preventDefault();
        if (validateLoginForm()) {
          // TODO: Replace with real authentication in Phase 2
          alert('Login exitoso (simulado)');
          // Redirect or further logic here
        }
      });
    }
  };

  // Initialize all
  const init = () => {
    initDataTables();
    initSelect2();
    bindEvents();
  };

  // Document ready
  $(document).ready(() => {
    init();
  });

})(jQuery);
