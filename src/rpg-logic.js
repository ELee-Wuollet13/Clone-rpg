export function charSheet (name, race, job){
  this.name =  name;
  this.race =  race;
  this.job =  job;
}

function worldPop (){
  this.roster = [];
}

worldPop.prototype.addChar = function (characterToAdd){
  this.roster.push(characterToAdd);
}

var ourList = new worldPop ();

//user interface
$(document).ready(function(){
  form.submit(function(){
    newCharName = $("#name").val();
    console.log(newCharName)

    var newPlayerCharacter = new Character (newCharName, newCharRace, newCharJob)
    ourList.addChar(newPlayerCharacter);
  })// this closes form submit

});// this closes doc ready



// export function charspec(name,race,job,intel,charisma, strength, endurance){
  // const race = [];
//   const job = [];
//   this.name = name;
//   this.xp = xp {
//     xp = 0;
//     gain = (xp + newxp)
//   }
//   // this.race = race;
//   this.job = job;
//   // this.intel = intel;
//   // this.charisma = charisma;
//   // this.strength = strength;
//   // this.endurance = endurance;
//   // let function health = {
//   //   13 + (end * lvl)
//   // }
//   this.inventory = inventory {
//     equipped, gearEquipable, gearUsable, knowledge
//   };
// }
//
// export function room(size, type, objectStatic, objectActive, npc) {
//   this.type = type;
//   this.size = size;
//   this.objectStatic = objectStatic;
//   this.objectActive = objectActive;
//   this.npcFriendly = npcFriendly;
//   this.npcNeutral = npcNeutral;
//   this.npcHostile = npcHostile;
// }
//
// export function npc(type, attack, strength, hitpoints, npcName) {
//   this.type = type;
//   this.attack = attack;
//   this.strength = strength;
//   this.hitpoints = hitpoints;
//   this.npcName = npcName;
// }
// export function battle() {
//   this.influence = influence {
//     // how do influence
//   }
//   this.attack = attack {
//     // Style, weapon and stats
//   }
//
// }
//
// export object (weapon, knowledge, gearUsable, gearEquipable) {
//   this.weapon = weapon;
//   this.knowledge = knowledge;
//   this.gear = gear;
//   this.clothes = clothes;
// }
//
// this.item = item {
//   clothes
//   armor
//   medkit
//   // which item
//
// }
//  weapon pistol (damageRange, missChance)
//  missChance {
//  if hit(true)
//   damageRange = (i = 5; )
//   else {"<p>Miss</p>"}
//   }
