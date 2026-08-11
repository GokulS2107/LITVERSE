document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate login - in a real app, this would be an API call
        if (email === 'admin@example.com' && password === 'admin123') {
            localStorage.setItem('authToken', 'simulated-token');
            localStorage.setItem('userRole', 'admin');
            window.location.href = 'admin-dashboard.html';
        } else if (email === 'user@example.com' && password === 'user123') {
            localStorage.setItem('authToken', 'simulated-token');
            localStorage.setItem('userRole', 'user');
            window.location.href = 'library.html';
        } else {
            alert('Invalid email or password');
        }
    });
});