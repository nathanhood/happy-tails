/* global calculateDamage, getImage, animalId */
/* jshint unused: false */
/* exported Dog */
//need to export new Class so that it is retrievable by main.js

class Dog{
  //constructor takes four parameters
  constructor(weapon, name, age, gender, photo){
  //properties of object that is being created
    this.id = animalId++;
    this.name = name;
    this.age = age * 1; //need to turn string into number
    this.gender = gender;
    this.photo = photo;
    this.health = 100;
    // this.weapon = weapon;
    this.weapon = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
