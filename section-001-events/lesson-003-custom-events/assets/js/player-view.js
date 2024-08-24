export class PlayerView {
    constructor(parentElem, initialStats) {
        this.container = null;
        this.counterContainer = null;
        this.rankDisplay = null;
        this.parentElem = parentElem;

        window.addEventListener('playerModelChanged', (e) => {
            this.update(e.detail);
        });

        this.init(initialStats);
        this.update();
    }

    init(initialStats){
        this.container = document.createElement('div');
        this.container.classList.add('player-card-v1');
        
        this.parentElem.append(this.container);
        
        let title = document.createElement('div')
        title.classList.add('player-title-v1');
        title.textContent = initialStats.name;
        
        this.container.append(title);
        
        this.counterContainer = document.createElement('div');
        this.counterContainer.classList.add('counter-container-v1');
        this.counterContainer.style.backgroundColor = initialStats.color;
        this.counterContainer.textContent = initialStats.score;
        
        this.container.append(this.counterContainer);

        let icon = document.createElement('div');
        icon.classList.add('player-icon-v1');
        icon.style.backgroundImage = `url(${initialStats.img})`;
        
        this.container.append(icon);

        let rankDisplayDiv = document.createElement('div');
        rankDisplayDiv.classList.add('rank-display-div');
        rankDisplayDiv.textContent = 'Rank: '

        this.container.append(rankDisplayDiv);

        this.rankDisplay = document.createElement('span');

        rankDisplayDiv.append(this.rankDisplay)
    }

    update(newStats){
        if (!newStats) {
            return
        }
        console.log('Rendered player');
        console.log(newStats);
        
        this.counterContainer.textContent = newStats.score;
        this.rankDisplay.textContent = newStats.rank;
    }
}