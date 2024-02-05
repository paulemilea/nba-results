// @ts-nocheck
function displayMessage(
  el,
  msg = 'Choose a date from the options below to view NBA games played/scheduled for that day.'
) {
  el.textContent = msg;
}

function toggleSpinnerVisibility() {
  const spinnerContainerEl = document.querySelector('.spinner-container');
  spinnerContainerEl.classList.toggle('hidden');
}

function getSeasonYear(inputDate) {
  const inputDateObj = new Date(inputDate);

  if (inputDateObj.getMonth() < 6) {
    return inputDateObj.getFullYear() - 1;
  }

  return inputDateObj.getFullYear();
}

export { displayMessage, getSeasonYear, toggleSpinnerVisibility };
