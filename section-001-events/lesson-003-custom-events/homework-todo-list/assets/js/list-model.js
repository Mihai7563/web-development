export class ListModel{
    constructor(obsUniqueID, uniqueID, position){
        this.uniqueID = uniqueID;
        this.tasks = [];

        window.addEventListener(`taskAdded${obsUniqueID}`, (e) => this.createTask(e))
    }


    createTask(event){
        const task = {
            text: event.detail.text
        }
        
        
        this.tasks.push(task);

        const taskCreatedEvent = new CustomEvent(`taskCreated${this.uniqueID}`, {
            detail: {
                tasks: this.tasks
            }
        });

        console.log(this.tasks);
        

        window.dispatchEvent(taskCreatedEvent);
    }
}