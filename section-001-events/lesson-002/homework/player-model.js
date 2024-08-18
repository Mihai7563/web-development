export class PlayerModel {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.color = '#';

        this.randomizeColor();
    }

    randomizeColor(){
        let letters = '0123456780ABCDEF'

        for (let i = 0; i < 6; i++) {
            this.color += letters[Math.floor(Math.random() * letters.length)]
        }
    }
}