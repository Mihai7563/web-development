class Random {

    //static method rollDice
    //static method randomOption
    //static method randomHexadecimal color code
    static randomNumberGenerator(){
        let min, max;
        switch (arguments.length) {
            case 0:
                min = 0;
                max = 10;
                break;

            case 1:
                min = 0;
                max = arguments[0];
                break;
            default:
                [min, max] = arguments;
                break;
        }

        return min + Math.floor(Math.random() * (max - min + 1)); 
    }

    static diceRoll(sides = 6){
        return Random.randomNumberGenerator(1, sides);
    }

    static option(options = ['option1', 'option2', 'option3']){
        return options[Random.randomNumberGenerator(options.length - 1)];
    }

    static hexCode(){
        const characters = '0123456789ABCDEF';
        let hexCode = '#';
        for (let i = 0; i < 6; i++) {
            const randomCharacter = characters[Random.randomNumberGenerator(characters.length - 1)];
            hexCode += randomCharacter;
        }

        return hexCode;
    }

    static excuse(
        leadIn = [`I'm sorry but`, `Holy Moses...`, `I couldn't help it but`, `I lost track of time because`, `Holy shit! Get this...`, `I'm usually not like this, but`], 
        preparator = [`the ghost of Hitler`, `the entire Roman Empire`, `a triceratops named Penelope`, `Scrooge McDuck`, `the little Asian kid from Indiana Jones`, `a man with 6 fingers on his right hand`, `Raiden from Mortal Kombat`], 
        delayingFactor = [`made me find Jesus`, `stole my bicycle`, `called me "too gay to fly a kite"... whatever that means`, `tried to seduce me`, `put me in a Chinese finger trap`, `texted racial slurs from my phone`, `ran me over with a diesel backhoe`, `slept with my uncle`, `stole my identity`]
    ){
        return `${Random.option(leadIn)} ${Random.option(preparator)} ${Random.option(delayingFactor)}`
    }

    static villainName(
        firstName = ['The Brutal', 'The Vile', 'Phantom', 'The Black', 'Lorin'],
        lastName = ['Man', 'Child', 'Lord', 'Tarantula', 'Skull', 'Fortuna', 'Clown']
    ){
        return `${Random.option(firstName)} ${Random.option(lastName)}`
    }
}


for (let i = 0; i < 20; i++) {
    // console.log(Random.randomOption(['🪨', '🧻', '✂️']));
    // console.log(Random.randomHexCode());
    console.log(`${i + 1}. ${Random.villainName()}`);
}
