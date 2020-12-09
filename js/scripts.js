//Find Select in HTML
const nameSelect = document.querySelector('.js-name-select');
const resultsWrapper = document.querySelector('.js-results-wrapper');
const studentName = document.querySelector('.js-student-name');

// Find Template
const newLiTemplate = document.querySelector('#new_li').content;

// Create Options in Select
const createOptions = function (array) {
  for (const user of array) {
    const newOption = document.createElement('OPTION');
    newOption.textContent = user.username;
    newOption.value = user.id;

    nameSelect.appendChild(newOption);
    username = user.username;
  };
};


const renderResults = function (evt) {
  resultsWrapper.innerHTML = '';

  let userId = null;

  if (evt && evt.type === 'change') {
    userId = Number(nameSelect.value);
  } else {
    userId = 1;
  }

  const filtered = data.filter(obj => obj.getUserId === userId);

  for (const user of filtered) {
    const newResult = newLiTemplate.cloneNode(true);

    newResult.querySelector('.js-date').textContent = user.visitDay;
    newResult.querySelector('.js-visit').textContent = user.visit ? 'OK' : '-';
    newResult.querySelector('.js-score').textContent = user.score;

    if (user.visit) {
      newResult.querySelector('.js-result-item').classList.add('bg-success');
    } 

    if (!user.visit) {
      newResult.querySelector('.js-result-item').classList.add('bg-danger');
    }
    resultsWrapper.appendChild(newResult);
  };
};


createOptions(users);

renderResults();
nameSelect.addEventListener('change', renderResults);
