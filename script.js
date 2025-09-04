// Interactive Web Pages with JavaScript
// This script handles:
// 1. Dark Mode Toggle
// 2. Collapsible FAQ Section
// 3. Custom Form Validation

// Part 1 & 2: Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

// Toggle dark mode on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update button text
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark'); // Save preference
  } else {
    themeToggle.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

//Part 2: Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Toggle visibility of answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

// Part 3: Form Validation
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const messageDiv = document.getElementById('form-message');

// Regular expression for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  // Reset previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  messageDiv.className = '';
  messageDiv.textContent = '';

  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    isValid = false;
  }

  // Show final message
  if (isValid) {
    messageDiv.textContent = 'Registration successful! Welcome aboard!';
    messageDiv.className = 'success';
    form.reset(); // Clear form
  } else {
    messageDiv.textContent = 'Please fix the errors above.';
    messageDiv.className = 'error-message';
  }
});