// Check if user is logged in
function checkAuth() {
    const token = localStorage.getItem('authToken');
    const isAuthPage = window.location.pathname.includes('login.html') || 
                       window.location.pathname.includes('register.html');
    
    if (token && isAuthPage) {
        window.location.href = 'library.html';
    } else if (!token && !isAuthPage && !window.location.pathname.includes('index.html')) {
        window.location.href = 'login.html';
    }
}

// Check if user is admin
function checkAdmin() {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
        window.location.href = 'index.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    window.location.href = 'index.html';
}

// Initialize auth checks and logout button
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    // Add logout event listener to all logout buttons
    document.querySelectorAll('#logoutBtn, #adminLogout').forEach(button => {
        button.addEventListener('click', logout);
    });
    
    // Check admin status on admin pages
    if (window.location.pathname.includes('admin-dashboard.html')) {
        checkAdmin();
    }
});