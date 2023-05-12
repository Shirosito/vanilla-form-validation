const d = document;
const form = d.querySelector(".form");
const emailInput = d.querySelector(".form__email");
const emailError = d.querySelector(".error-message");

emailInput.addEventListener('input', () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(emailInput.value)) {
    emailError.textContent = 'Email inválido. Ingresa un email válido.';
  } else {
    emailError.textContent = '';
  }

  if (emailInput.value === '') {
    emailError.textContent = '';
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
});