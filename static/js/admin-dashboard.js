document.addEventListener('DOMContentLoaded', function() {
    // Sample data for charts
    const readsData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Books Read',
            data: [120, 190, 150, 220, 180, 250, 210, 300, 280, 320, 350, 400],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    };

    const genreData = {
        labels: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Romance'],
        datasets: [{
            data: [35, 25, 15, 10, 8, 7],
            backgroundColor: [
                '#007bff',
                '#28a745',
                '#17a2b8',
                '#ffc107',
                '#dc3545',
                '#6f42c1'
            ]
        }]
    };

    // Initialize charts
    const readsCtx = document.getElementById('readsChart').getContext('2d');
    const readsChart = new Chart(readsCtx, {
        type: 'line',
        data: readsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const genreCtx = document.getElementById('genreChart').getContext('2d');
    const genreChart = new Chart(genreCtx, {
        type: 'pie',
        data: genreData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Initialize DataTables
    $('#booksTable').DataTable({
        responsive: true
    });

    $('#usersTable').DataTable({
        responsive: true
    });

    $('#activityTable').DataTable({
        responsive: true,
        order: [[3, 'desc']]
    });

    // Add book form
    $('#saveBookBtn').click(function() {
        const title = $('#bookTitle').val();
        const author = $('#bookAuthor').val();
        const genre = $('#bookGenre').val();
        const description = $('#bookDescription').val();
        const featured = $('#bookFeatured').is(':checked');
        
        if (!title || !author || !genre) {
            alert('Please fill in all required fields');
            return;
        }
        
        // In a real app, this would submit to an API
        alert(`Book "${title}" by ${author} has been saved!`);
        $('#addBookModal').modal('hide');
        $('#addBookForm')[0].reset();
    });

    // Add plan form
    $('#savePlanBtn').click(function() {
        const name = $('#planName').val();
        const price = $('#planPrice').val();
        const duration = $('#planDuration').val();
        const features = $('#planFeatures').val();
        const active = $('#planActive').is(':checked');
        
        if (!name || !price) {
            alert('Please fill in all required fields');
            return;
        }
        
        // In a real app, this would submit to an API
        alert(`Plan "${name}" has been saved!`);
        $('#addPlanModal').modal('hide');
        $('#addPlanForm')[0].reset();
    });

    // Update stats (simulated)
    function updateStats() {
        $('#totalUsers').text(Math.floor(Math.random() * 2000) + 1000);
        $('#totalBooks').text(Math.floor(Math.random() * 3000) + 2000);
        $('#activeSubscriptions').text(Math.floor(Math.random() * 1500) + 800);
        $('#dailyReads').text(Math.floor(Math.random() * 500) + 200);
    }

    // Update stats every 5 seconds (for demo purposes)
    setInterval(updateStats, 5000);
    updateStats();
});