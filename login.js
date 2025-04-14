document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    console.log('Login attempt:', username, password); // Debug log
    console.log('Stored users:', users); // Debug log

    if (users[username] && users[username] === password) {
        localStorage.setItem('isLoggedIn', 'true');
        console.log('Login successful, redirecting to index.html');
        window.location.href = 'index.html';
    } else {
        errorMessage.style.display = 'block';
        console.log('Login failed');
    }
});