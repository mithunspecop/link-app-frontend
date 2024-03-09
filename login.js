document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('message').innerText = 'Login successful!';
        // Redirect or perform other actions upon successful login
    } else {
        document.getElementById('message').innerText = data.error || 'Login failed';
    }
});
