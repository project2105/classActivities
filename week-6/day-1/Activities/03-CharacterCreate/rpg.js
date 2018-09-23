function Character(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.PrintStats = function () {
        console.log(this);
    };
    this.IsAlive = function () {
        if (this.hitPoints > 0) {
            console.log(this.name + ' is alive!');
        }
    };
    this.attack = function (enemy) {
        enemy.hitPoints -= this.strength;
        console.log(enemy.hitPoints);
    }
}

var player1 = new Character('John', 'plumber', 'male', 33, 18, 12);
var player2 = new Character('Sue', 'attorney', 'female', 32, 12, 185);

player1.PrintStats();
player2.PrintStats();
player1.IsAlive();
player2.IsAlive();
player1.attack(player2);