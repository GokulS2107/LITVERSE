document.addEventListener('DOMContentLoaded', function() {
    // Profile form submission
    $('#profileForm').submit(function(e) {
        e.preventDefault();
        alert('Profile updated successfully!');
    });
    
    // Preferences form submission
    $('#preferencesForm').submit(function(e) {
        e.preventDefault();
        alert('Reading preferences saved!');
    });
    
    // Settings form submission
    $('#settingsForm').submit(function(e) {
        e.preventDefault();
        alert('Account settings updated!');
    });
    
    // Security form submission
    $('#securityForm').submit(function(e) {
        e.preventDefault();
        const currentPass = $('#currentPassword').val();
        const newPass = $('#newPassword').val();
        const confirmPass = $('#confirmNewPassword').val();
        
        if (!currentPass || !newPass || !confirmPass) {
            alert('Please fill in all fields');
            return;
        }
        
        if (newPass !== confirmPass) {
            alert('New passwords do not match');
            return;
        }
        
        // Password strength check
        if (newPass.length < 8 || !/\d/.test(newPass) || !/[!@#$%^&*]/.test(newPass)) {
            alert('Password must be at least 8 characters long and contain at least one number and one special character');
            return;
        }
        
        alert('Password changed successfully!');
        $('#securityForm')[0].reset();
    });
    
    // Change photo button
    $('.change-photo-btn').click(function() {
        alert('In a real application, this would allow you to upload a new profile photo.');
    });
    
    // Initialize tabs
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        $(`a[href="${activeTab}"]`).tab('show');
    }
    
    // Timeline animation
    $('.timeline-item').each(function(i) {
        $(this).delay(i * 200).fadeIn();
    });
});