document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('data-entry-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const dobInput = document.getElementById('dob');
        const salaryInput = document.getElementById('salary');
        const addressInput = document.getElementById('address');
        const cityInput = document.getElementById('city');
        const countryInput = document.getElementById('country');
        const commentsInput = document.getElementById('comments');

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return false;
        }

        const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            alert('Please enter a valid phone number in the format (XXX) XXX-XXXX.');
            phoneInput.focus();
            return false;
        }

        const currentDate = new Date();
        const selectedDate = new Date(dobInput.value);
        if (selectedDate >= currentDate) {
            alert('Please enter a valid date of birth.');
            dobInput.focus();
            return false;
        }

        if (isNaN(salaryInput.value) || salaryInput.value < 1000 || salaryInput.value > 1000000) {
            alert('Please enter a valid salary between $1000 and $1000000.');
            salaryInput.focus();
            return false;
        }

        if (addressInput.value.trim() === '') {
            alert('Please enter your address.');
            addressInput.focus();
            return false;
        }

        const cityRegex = /^[A-Za-z]+$/;
        if (!cityRegex.test(cityInput.value)) {
            alert('Please enter a valid city name.');
            cityInput.focus();
            return false;
        }

        if (countryInput.value === '') {
            alert('Please select your country.');
            countryInput.focus();
            return false;
        }

        form.submit();
    }
});