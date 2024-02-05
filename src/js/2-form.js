const feedbackForm = document.querySelector('form');
const localStorageKey = 'feedback-form-state';
const savedLocalStorageKey = localStorage.getItem(localStorageKey);
const feedback = JSON.parse(savedLocalStorageKey) ?? {};
const userEmail = feedbackForm.elements.email;
const userMessage = feedbackForm.elements.message;

// Підставлення даних з локального сховища при оновлені сторінки
userEmail.value = feedback.email ?? '';
userMessage.value = feedback.message ?? '';

// Запис введених даних у локальне сховище
feedbackForm.addEventListener('input', recordLocalStorage);

function recordLocalStorage(event) {
  feedback.email = feedbackForm.elements.email.value.trim();
  feedback.message = feedbackForm.elements.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(feedback));
}

// Дія при натисканні кнопки submit
feedbackForm.addEventListener('submit', sendingData);

function sendingData(event) {
  event.preventDefault();
  if (!userEmail.value || !userMessage.value) {
    return alert('Будь ласка, заповніть всі поля форми');
  } else {
    console.log(feedback);
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
  }
}
