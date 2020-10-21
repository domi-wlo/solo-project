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


// open modal

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach( function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

// for quit option
document.querySelector('.quit').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#quitModal');
});

// for chat
document.querySelector('.manager-info').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#chatModal');
});

//close modal 

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

