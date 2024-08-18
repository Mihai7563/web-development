export class PlayerView2 {
    constructor(model, parentElem) {
        this.model = model;
        this.container = null;
        this.crown = null;
        this.counterContainer = null;
        this.rankDisplay = null;
        this.parentElem = parentElem;

        this.init();
        this.update();
    }

    init(){
        this.container = document.createElement('div');
        this.container.classList.add('player-card-v2');
        
        this.parentElem.append(this.container);

        // this.crown = document.createElement('div');
        // this.crown.classList.add('player-crown-area'); 

        // this.container.append(this.crown);

        
        let title = document.createElement('div')
        title.classList.add('player-title-v2');
        title.textContent = this.model.name;
        
        this.container.append(title);
        
        this.counterContainer = document.createElement('div');
        this.counterContainer.classList.add('counter-container-v2');
        this.counterContainer.style.backgroundColor = this.model.color;
        
        this.container.append(this.counterContainer);

        let icon = document.createElement('div');
        icon.classList.add('player-icon-v2');
        icon.style.backgroundImage = `url(../assets/img/${this.model.img}.svg)`;
        
        this.container.append(icon);

        let rankDisplayDiv = document.createElement('div');
        rankDisplayDiv.classList.add('rank-display-div');
        rankDisplayDiv.textContent = 'Rank: '

        this.container.append(rankDisplayDiv);

        this.rankDisplay = document.createElement('span');

        rankDisplayDiv.append(this.rankDisplay)
    }

    setNo1Rank(){
        this.rankDisplay.style.color = '';
        this.rankDisplay.style.color = '#ffbf00';
    }
    
    setNo2Rank(){
        this.rankDisplay.style.color = '';
        this.rankDisplay.style.color = '#838996';
    }
    
    setNo3Rank(){
        this.rankDisplay.style.color = '';
        this.rankDisplay.style.color = '#CD7F32';
    }
    
    update(){
        this.counterContainer.textContent = this.model.score;
        this.rankDisplay.textContent = this.model.rank;
        
        switch (this.model.rank) {
            case 1:
                this.setNo1Rank();
                break;

            case 2:
                this.setNo2Rank();
                break;

            case 3:
                this.setNo3Rank();
                break;
        
            default:
                this.rankDisplay.style.color = '';
                break;
        }
    }
}