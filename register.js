document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const registerMessage = document.getElementById('register-message');

    // Simple storage (in real apps, use a secure backend)
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    console.log('Register attempt:', username, password); // Debug log
    if (!users[username]) {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        registerMessage.style.display = 'block';
        console.log('User registered:', users); // Debug log
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000); // Redirect to login after 2 seconds
    } else {
        alert('Username already exists!');
    }
});