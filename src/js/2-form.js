const feedbackForm = document.querySelector('form');
const userEmail = feedbackForm.elements.email;
const userMessage = feedbackForm.elements.message;
const localStorageKey = 'feedback-form-state';

// Запис введених даних у локальне сховище
const feedback = {};

feedbackForm.addEventListener('input', recordLocalStorage);
function recordLocalStorage(event) {
  feedback.email = feedbackForm.elements.email.value.trim();

  feedback.message = feedbackForm.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(feedback));
}

// Підставляння даних з локального сховища у відповідні елементи форми при оновленні сторінки
const savedLocalStorageKey = localStorage.getItem(localStorageKey);
const parsedLocalStorageKey = JSON.parse(savedLocalStorageKey);

userEmail.value = parsedLocalStorageKey.email ?? '';
userMessage.value = parsedLocalStorageKey.message ?? '';

// Відправлення даних, очищення форми та локального сховища
feedbackForm.addEventListener('submit', sendingData);
function sendingData(event) {
  event.preventDefault();
  if (
    feedbackForm.elements.email.value !== '' &&
    feedbackForm.elements.message.value !== ''
  ) {
    console.log(parsedLocalStorageKey);
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
  }
}
