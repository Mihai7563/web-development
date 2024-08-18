export class PlayerView {
    constructor(model, parentElem) {
        this.model = model;
        this.parentElem = parentElem;

        this.init();
    }

    init(){
        let container = document.createElement('div');
        container.classList.add('player-card');
        this.parentElem.append(container);

        let icon = document.createElement('div');
        icon.classList.add('player-icon');
        icon.style.backgroundImage = this.model.img;
        container.append(icon);

        let title = document.createElement('div')
        title.classList.add('player-title');
        title.textContent = this.model.name;
        container.append(title);


    }
}