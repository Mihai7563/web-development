class Dice{
    static roll(sides = 6){
        return Math.floor(Math.random() * sides + 1);
    }
}

console.log(Dice.roll());
console.log(Date.now());

const d = new Date();
console.log(d);



