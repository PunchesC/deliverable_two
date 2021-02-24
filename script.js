let pet = prompt("What's pet's name?");

if (pet) {
  alert(pet + ', ' + 'such a lovely name!');
}

let energy = 0;

let happiness = 0;

for (var x = 0; x < 6; x++) {
  let result =prompt('What would you like to do today with' + ' ' + pet + '?');

  if (result === 'feed') {
    energy = +2;
  } else if (result === 'pet') {
    happiness += 1;
  } else if (result === 'walk' && energy > 0) {
    happiness += 2;
    energy -= 1;
  } else {
    alert('Not enough energy to enjoy a walk.');
  }
}

console.log(pet + " has "  + happiness + " happiness and " + energy + " energy.");

