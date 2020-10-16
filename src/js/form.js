'user strict';
const inputList = document.querySelectorAll('.js-fill__input');
// const cardValue = document.querySelectorAll('.js__card--value');
let data = {
  fullName: 'Barry Allen - Flash',
  job: 'The fastest man alive',
  mail: '',
  telephone: '',
  linkedin: '',
  github: '',
};
const saveField = function (event) {
  data[event.currentTarget.id] = event.currentTarget.value;
  console.log(data[event.currentTarget.id]);
  console.log(event.currentTarget.id);
  const idCards = `#js-${event.currentTarget.id}-card`;
  document.querySelector(idCards).innerHTML = event.currentTarget.value;
  console.log(idCards);
};
//
for (const eachElement of inputList) {
  eachElement.addEventListener('blur', saveField);
}