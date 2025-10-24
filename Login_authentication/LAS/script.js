const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    if (username === '' || password === '') {
      document.getElementById('registerMessage').innerText = "⚠️ Please fill all fields.";
      return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    document.getElementById('registerMessage').innerText = "✅ Registration Successful!";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });
}
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const enteredUser = document.getElementById('loginUsername').value.trim();
    const enteredPass = document.getElementById('loginPassword').value.trim();
    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');
    const messageBox = document.getElementById('loginMessage');
    if (enteredUser === '' || enteredPass === '') {
      messageBox.innerText = "⚠️ Please enter both username and password.";
      return;
    }
    if (enteredUser === storedUser && enteredPass === storedPass) {
      messageBox.innerText = "✅ Login Successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "welcome.html";
      }, 1000);
    } else {
      messageBox.innerText = "❌ Invalid Username or Password!";
    }
  });
}
function logoutUser() {
  alert("You have successfully logged out!");
  window.location.href = "index.html";
}