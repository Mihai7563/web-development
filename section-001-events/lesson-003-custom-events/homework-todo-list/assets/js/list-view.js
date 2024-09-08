export class ListView {
    constructor(parentElem, uniqueID, modelUniqueID) {
        this.parentElem = parentElem;
        this.cardTitle = null;
        this.list = null;
        this.newTaskBtn = null;
        this.editBtn = null;
        this.background = null;
        this.uniqueID = uniqueID;

        window.addEventListener(`taskCreated${modelUniqueID}`, (e) => this.updateUI(e))
    }

    init(){
        const card = document.createElement('div');
        card.classList.add('test-card');
        this.parentElem.append(card);

        const header = document.createElement('div');
        header.classList.add('card-header');
        card.append(header);

        this.title = document.createElement('div');
        this.title.classList.add('card-title')
        header.append(this.title);
        this.title.textContent = 'New to-do list'

        const line = document.createElement('div');
        line.classList.add('line');
        header.append(line);

        const body = document.createElement('card-body');
        body.classList.add(card-body);
        card.append(body);

        this.list = document.createElement('ol');
        body.append(this.list);
        
        this.newTaskBtn = document.createElement('div');
        this.newTaskBtn.classList.add('new-li-btn');
        body.append(this.newTaskBtn);
        this.newTaskBtn.textContent = '+';
        this.newTaskBtn.addEventListener('click', () => this.addNewTask())

        this.editBtn = document.createElement('div');
        this.editBtn.classList.add('edit-btn');
        body.append(this.editBtn);
        this.editBtn.textContent = 'Edit';

        this.background = document.createElement('div');
        this.background.classList.add('transparent-bg');
        this.parentElem.append(this.background);

    }
    
    addNewTask(){
        this.background.classList.add('transparent-bg-visible')
        
        console.log(this.background);
        console.log('added new task');

        const container = document.createElement('div');
        container.classList.add('new-task-input-container');
        this.background.append(container);
        container.textContent = 'Add a new task';

        const newTaskInput = document.createElement('textarea');
        newTaskInput.classList.add('new-task-input');
        container.append(newTaskInput);
        newTaskInput.maxLength = 80;

        const confirmBtn = document.createElement('div');
        confirmBtn.classList.add('confirm-btn');
        container.append(confirmBtn);
        confirmBtn.textContent = 'CONFIRM';

        confirmBtn.addEventListener('click', () => {
            this.background.classList.remove('transparent-bg-visible');
            container.remove();
            const event = new CustomEvent(`taskAdded${this.uniqueID}`, {
                detail: {
                    text: newTaskInput.value
                }
            });  
            window.dispatchEvent(event);
        })
    }
    
    updateUI(event){
        const task = document.createElement('li');
        this.list.append(task);
        task.textContent = event.detail.tasks[event.detail.tasks.length - 1].text;
        task.addEventListener('click', () => {
            task.classList.toggle('task-completed');
        })
    }
}