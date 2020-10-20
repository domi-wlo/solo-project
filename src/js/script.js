/* global flatpickr */

// show/hide side menu
function toggleMenu(visible) {
  document.querySelector('.side-bar-menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});


// calendar - flatpickr
const calendarInput = document.querySelector(`input[name="date"]`);

const options = {
  mode: 'range',
  dateFormat: 'Y-m-d',
  locale: {
    'firstDayOfWeek': 1 // start week on Monday
  },
};

flatpickr(calendarInput, options);