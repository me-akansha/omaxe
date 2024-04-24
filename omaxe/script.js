document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Here you can perform form validation if needed

    // After form submission, redirect to thank-you.html
    window.location.href = 'thank_you.html';
});
// Form validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('Phone No.');
    const message = document.getElementById('message');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
document.getElementById("privacyPolicyButton").addEventListener("click", function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
  });
