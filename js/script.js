// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the input values of the form
    const yourName = document.getElementById('yourName').value.trim();
    const email = document.getElementById('email').value.trim();
    const relationship = document.getElementById('relationship').value;
    const wordsToMe = document.getElementById('wordsToMe').value.trim();

    // Verify whether all form fields have passed the validation
    const isFormValid = [
        yourName!== '',
        email!== '',
        relationship!== '',
        wordsToMe!== ''
    ].every(Boolean);

    if (!isFormValid) {
        const fieldNames = ['Your Name', 'Your Email', 'Your Relationship with Me', 'Words for Me'];
        const errorMessages = [];
        if (yourName === '') {
            errorMessages.push('Please fill in your name.');
        }
        if (email === '') {
            errorMessages.push('Please fill in your email.');
        }
        if (relationship === '') {
            errorMessages.push('Please select your relationship with me.');
        }
        if (wordsToMe === '') {
            errorMessages.push('Please leave your message.');
        }

        alert(errorMessages.join('\n'));
        return;
    }

    // If all validations are passed, display a success submission prompt and reset the form
    alert('Your submission has been successful.');
    form.reset();
});

