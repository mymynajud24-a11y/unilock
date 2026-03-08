let selectedLocker = null;
let bookedLockers = new Set();

function showLocations() {
  document.getElementById('locations').style.display = 'flex';
}

function showLockers(location) {
  const lockers = {
    DPT: ['D001','D002','D003','D004','D005','D006','D007','D008'],
    Gym: ['G001','G002','G003','G004','G005','G006']
  };

  const lockerSection = document.getElementById('lockers');
  lockerSection.innerHTML = lockers[location].map(id => {
    const disabled = bookedLockers.has(id) ? 'disabled' : '';
    return `<button id="${id}" class="locker-btn" ${disabled} onclick="bookLocker('${id}')">${id}</button>`;
  }).join('');

  updateAvailability(location, lockers[location]);
}

function updateAvailability(location, lockerList) {
  const available = lockerList.filter(id => !bookedLockers.has(id)).length;
  if (location === 'DPT') {
    document.getElementById('dptCount').innerText = `${lockerList.length} lockers • ${available} available`;
  } else if (location === 'Gym') {
    document.getElementById('gymCount').innerText = `${lockerList.length} lockers • ${available} available`;
  }
}

function bookLocker(lockerId) {
  if (bookedLockers.has(lockerId)) {
    alert("This locker is already booked.");
    return;
  }
  selectedLocker = lockerId;
  document.getElement
