document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (!terms) {
            alert('You must agree to the terms and conditions');
            return;
        }
        
        // Password strength check
        if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one number and one special character');
            return;
        }
        
        // Simulate registration - in a real app, this would be an API call
        localStorage.setItem('authToken', 'simulated-token');
        localStorage.setItem('userRole', 'user');
        localStorage.setItem('userName', `${firstName} ${lastName}`);
        localStorage.setItem('userEmail', email);
        
        alert('Registration successful!');
        window.location.href = 'library.html';
    });
});