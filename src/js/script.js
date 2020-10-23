/* global flatpickr */
/* global Chart */

// show/hide side menu
function toggleMenu(visible) {
  document.querySelector('.side-bar-menu').classList.toggle('show', visible);
  document.querySelector('.top-bar').classList.toggle('show', visible);
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

// chart

var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-unused-vars
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});