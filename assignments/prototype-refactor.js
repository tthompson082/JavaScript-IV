/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(attributes) {
// this.createdAt = attributes.createdAt;
// this.name = attributes.name;
// this.dimensions = attributes.dimensions;
// }
// GameObject.prototype.destroy = function() {
// return `${this.name} was removed from the game.`
// }

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(atts) {
// this.healthPoints = atts.healthPoints;
// GameObject.call(this, atts);
// }

// CharacterStats.prototype = Object.create(GameObject.prototype)

// CharacterStats.prototype.takeDamage = function() {
// return `${this.name} took damage.`
// }

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes)
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
// function Humanoid(info) {
// this.team = info.team;
// this.weapons = info.weapons;
// this.language = info.language;
// CharacterStats.call(this, info)
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype)

// Humanoid.prototype.greet = function() {
// return `${this.name} offers a greeting in ${this.language}`
// }

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes)
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}

// function Hero(ats) {
// Humanoid.call(this, ats);
// }
// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.attack = function(target, value) {
// let damage = target.healthPoints - value;
// if (damage <= 0) {
//   return `${target.name} was removed from the game.`
// } else {
//   return target.healthPoints = damage
// }
// }

class Hero extends Humanoid {
    constructor(attributes){
        super(attributes) 
    }
    attack(target, damage) {
        let remainingHealth = target.healthPoints - damage;
        if (remainingHealth <= 0) {
            return `${target.name} was removed from the game.`
        } else {
            return target.healthPoints = remainingHealth
        }
    }
}

// function Villain(attrs) {
// Humanoid.call(this, attrs);
// }
// Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.attack = function(target, value) {
// let damage = target.healthPoints - value;
// if (damage <= 0) {
//   return `${target.name} was removed from the game.`
// } else {
//   return target.healthPoints = damage
// }
// }

class Villain extends Humanoid {
    constructor(attributes){
        super(attributes) 
    }
    attack(target, damage) {
        let remainingHealth = target.healthPoints - damage;
        if (remainingHealth <= 0) {
            return `${target.name} was removed from the game.`
        } else {
            return target.healthPoints = remainingHealth
        }
    }
}


/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const bill = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 5,
  },
  healthPoints: 15,
  name: 'Bill',
  team: 'Red',
  weapons: [
    'Bow',
    'Fists'
  ],
  language: 'Common Tongue'
})

const ted = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 5,
  },
  healthPoints: 15,
  name: 'Ted',
  team: 'Blue',
  weapons: [
    'Bow',
    'Fists'
  ],
  language: 'Common Tongue'
})

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
ted.attack(bill, 5)
console.log(bill)
bill.attack(ted, 7)
console.log(ted)
ted.attack(bill, 6)
console.log(bill)
console.log(bill.attack(ted, 8))