/* global Dragon:true, Dog:true, Cat:true, Sloth:true */
/* jshint unused:false */

//have to make Dragon global

(function(){
  'use strict';

  $('document').ready(init);

  let animals = [];

  function init(){
    $('#add').click(add);
    $('#animals').on('click', '.training', train);
  }

  function train(){
    console.log(this);
    debugger;
  }

  function add(){
    let species = $('#species').val().toLowerCase();
    let name = $('#name').val();
    let age = $('#age').val();
    let gender = $('#gender').val();
    let photo = $('#photo').val();
    let weapon = $('#weapon').val();
    let animal;

    switch(species){
    case 'dragon':
      animal = new Dragon(weapon, name, age, gender, photo);// this object will be orphaned once function is complete unless pointed somewhere.
      insertAnimal(species, name, age, gender, photo, animal.health, animal.weapon, animal.damage, animal.id);
      break;
    case 'dog':
      animal = new Dog(weapon, name, age, gender, photo);
      insertAnimal(species, name, age, gender, photo, animal.health, animal.weapon, animal.damage, animal.id);
      break;
    case 'cat':
      animal = new Cat(weapon, name, age, gender, photo);
      insertAnimal(species, name, age, gender, photo, animal.health, animal.weapon, animal.damage, animal.id);
      break;
    case 'sloth':
      animal = new Sloth(weapon, name, age, gender, photo);
      insertAnimal(species, name, age, gender, photo, animal.health, animal.weapon, animal.damage, animal.id);
      break;
    }
    // variables (inside parenth) correlate to parameters/properties in constructor

    animals.push(animal);
  }



  function insertAnimal(species, name, age, gender, photo, health, weapon, damage, id){
    let div = `<div data-id=${id} class=${species}>
    <div class=photo><img src=${photo}></div>
    <div class=meta>
    <div class=name>name: ${name}</div>
    <div class=age>age: ${age}</div>
    <div class=gender>gender: ${gender}</div>
    <div class=health>health: ${health}%</div>
    <div class=weapon><img class=weaponImage src=${weapon}></div>
    <div class=damage>damage: ${damage}</div>
    </div>
    <div class=action>
    <div class=training><img src=../media/training.png>     train</div>
    </div>
    </div>`;
    $(`#${species}`).append(div);
  }



})();
