document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('loginError');

  if (email === 'TestUser@gmail.com' && password === 'Admin@123') {
    localStorage.setItem('loginPassed', 'true');
    window.location.href = 'collectCustomerDetails.html';
  } else {
    error.textContent = 'Invalid credentials. Try again.';
  }
});