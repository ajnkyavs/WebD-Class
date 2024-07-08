document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Checking if form is valid
    if (this.checkValidity() === false) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
    }
    
    // Getting form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const components = Array.from(document.getElementById('components').selectedOptions).map(option => option.value);
    const quantity = document.getElementById('quantity').value;
    
    // Display order summary
    document.getElementById('summaryName').textContent = name;
    document.getElementById('summaryEmail').textContent = email;
    document.getElementById('summaryComponents').textContent = components.join(', ');
    document.getElementById('summaryQuantity').textContent = quantity;
    
    document.getElementById('orderSummary').classList.remove('hidden');
});
