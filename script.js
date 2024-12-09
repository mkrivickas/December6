document.addEventListener('DOMContentLoaded', () => {
  const monthElement = document.getElementById('month');
  const dayElement = document.getElementById('day');
  const dateElement = document.getElementById('date');
  const yearElement = document.getElementById('year');

  const now = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  monthElement.textContent = months[now.getMonth()];
  dayElement.textContent = days[now.getDay()];
  dateElement.textContent = now.getDate();
  yearElement.textContent = now.getFullYear();
});
