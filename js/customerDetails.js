if (localStorage.getItem('loginPassed') !== 'true') {
  window.location.href = 'login.html';
}

const form = document.getElementById('customerForm');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');

function validateInputs() {
  const email = emailField.value.trim();
  const phone = phoneField.value.trim();

  const validEmail = email.endsWith('@gmail.com');
  const validPhone = /^\d{10}$/.test(phone);

  submitBtn.disabled = !(validEmail && validPhone);
}

emailField.addEventListener('input', validateInputs);
phoneField.addEventListener('input', validateInputs);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = emailField.value.trim();
  const phone = phoneField.value.trim();

  const userInfo = { name, email, phone };
  localStorage.setItem('customerInfo', JSON.stringify(userInfo));
  window.location.href = 'index.html';
});