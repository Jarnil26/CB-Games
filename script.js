// Check if user is already logged in when loading the page
window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        alert(`Welcome back, ${loggedInUser}!`);
        window.location.href = "game.html"; // Redirect to the game page (you can replace this URL)
    }
};

// Show the login form
function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Show the signup form
function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Handle user signup
function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        document.getElementById('signup-error').textContent = 'Username already exists.';
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please log in.');
        showLoginForm();
    }
}

// Handle user login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        alert(`Welcome, ${username}!`);
        window.location.href = "Home.html"; // Redirect to the game page (replace with actual game page URL)
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password.';
    }
}
