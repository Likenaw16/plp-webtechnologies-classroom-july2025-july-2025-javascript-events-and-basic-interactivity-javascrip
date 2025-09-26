// 1. Button Click Example
const greetBtn = document.getElementById('greetBtn');
const greetMsg = document.getElementById('greetMsg');

greetBtn.addEventListener('click', () => {
    greetMsg.textContent = "Hello! You clicked the button! 🎉";
});

// 2. Light/Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 3. Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// 4. Form Validation
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent submission

    // Clear previous message
    formMsg.textContent = '';

    // Simple validation
    let errors = [];
    if(nameInput.value.trim() === '') errors.push("Name is required.");
    if(!/^\S+@\S+\.\S+$/.test(emailInput.value)) errors.push("Email is invalid.");
    if(passwordInput.value.length < 6) errors.push("Password must be at least 6 characters.");

    if(errors.length > 0){
        formMsg.style.color = 'red';
        formMsg.innerHTML = errors.join('<br>');
    } else {
        formMsg.style.color = 'green';
        formMsg.textContent = "Form submitted successfully! ✅";
        form.reset();
    }
});
