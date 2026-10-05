const button = document.getElementById('submitBtn');
const input = document.getElementById('userInput');
const display = document.getElementById('displayText');

button.addEventListener('click', () => {
  const value = input.value.trim();

  if (!value) {
    display.textContent = 'Please enter a valid value.';
    display.style.color = 'red';
    return;
  }

  display.textContent = `Hello, ${value}!`;
  display.style.color = 'green';
});