export class PlayerView {
    constructor(model, parentElem, cssClasslist = []) {
        this.model = model;
        this.container = null;
        this.crown = null;
        this.counterContainer = null;
        this.parentElem = parentElem;

        this.init(cssClasslist);
        this.update();
    }

    init(cssClasslist){
        this.container = document.createElement('div');
        this.container.classList.add('player-card');
        
        this.parentElem.append(this.container);

        this.crown = document.createElement('div');
        this.crown.classList.add('player-crown-area'); 

        this.container.append(this.crown);

        let icon = document.createElement('div');
        icon.classList.add('player-icon');
        icon.style.backgroundImage = `url(../assets/img/${this.model.img}.svg)`;
        icon.style.backgroundColor = this.model.color;
        
        this.container.append(icon);

        let title = document.createElement('div')
        title.classList.add('player-title');
        title.textContent = this.model.name;

        this.container.append(title);

        this.counterContainer = document.createElement('div');
        this.counterContainer.classList.add('counter-container', ...cssClasslist);
        
        this.container.append(this.counterContainer);
    }

    showCrown(){
        this.crown.classList.add('player-crown-visible');
        this.container.classList.add('highlight');
    }

    hideCrown(){
        this.crown.classList.remove('player-crown-visible');
        this.container.classList.remove('highlight');
    }
    
    update(){
        this.counterContainer.textContent = this.model.score;
        if(this.model.rank == 1){
            this.showCrown();
            document.querySelector('.leader-display').textContent = `${this.model.name} is leading!`
        }
        else{
            this.hideCrown();
        }
    }
}