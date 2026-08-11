document.addEventListener('DOMContentLoaded', function() {
    // Plan selection
    const planCards = document.querySelectorAll('.pricing-plans .card');
    
    planCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            planCards.forEach(c => {
                c.classList.remove('border-primary');
                c.querySelector('.btn').classList.remove('btn-primary');
                c.querySelector('.btn').classList.add('btn-outline-primary');
            });
            
            // Add active class to clicked card
            this.classList.add('border-primary');
            const btn = this.querySelector('.btn');
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-primary');
        });
    });
    
    // Upgrade button click
    document.querySelectorAll('.pricing-plans .btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const plan = this.closest('.card').querySelector('h4').textContent;
            alert(`You have selected the ${plan} plan. In a real application, this would proceed to payment.`);
        });
    });
    
    // FAQ accordion
    $('.accordion .card-header button').click(function() {
        $(this).find('i').toggleClass('fa-plus fa-minus');
    });
});