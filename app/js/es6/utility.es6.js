/* exported calculateDamage, getImage, animalId */

var animalId = 0;

function calculateDamage(weapon){
  'use strict';

  let max;

  switch(weapon){
  case 'Poison':
    max = 10;
    break;
  case 'Fire':
    max = 20;
    break;
  case 'Arrow':
    max = 15;
    break;
  case 'Axe':
    max = 30;
    break;
  }

  return Math.ceil(Math.random() * max);
}

function getImage(weapon){
  'use strict';

  let img = '../media/';

  switch(weapon){
  case 'Poison':
    img += 'poison.png';
    break;
  case 'Fire':
    img += 'fire.png';
    break;
  case 'Arrow':
    img += 'arrow.png';
    break;
  case 'Axe':
    img += 'axe.png';
  }
  
  return img;
}
