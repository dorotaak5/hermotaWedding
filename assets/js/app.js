var us = {
  ourName: 'Hermota',
  hisName: 'Herman',
  herName: 'Dorota'
};

console.log(us.hisName);
console.log(us.herName);

document.querySelector('.us').addEventListener('click', function() {
  document.querySelector('.usPic').style.display = 'block';
})

function we() {
  console.log('Thank you from' + us.hisName + 'and' + us.herName);
}

we();


document.querySelector('.her').addEventListener('click', function() {
  console.log(we);
})

