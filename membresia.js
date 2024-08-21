document.addEventListener('DOMContentLoaded', function() {
    const purchaseButtons = document.querySelectorAll('.purchase-button');
    
    purchaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const price = this.getAttribute('data-price');
            alert(`Has seleccionado la membresía de ${plan} por $${price}.`);
        });
    });
});
