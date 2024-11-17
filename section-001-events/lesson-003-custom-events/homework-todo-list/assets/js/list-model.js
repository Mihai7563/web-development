export class ListModel{
    constructor(uniqueID){
        this.uniqueID = uniqueID;
        this.tasks = [];

        window.addEventListener(`editTitleRequest${this.uniqueID}`, (e) => this.editTitle(e.detail));
        window.addEventListener(`createTaskRequest${this.uniqueID}`, (e) => this.createTask(e.detail));
        window.addEventListener(`toggleTaskRequest${this.uniqueID}`, (e) => this.toggleTask(e.detail.index));
        window.addEventListener(`deleteTaskRequest${this.uniqueID}`, (e) => this.deleteTask(e.detail.index));
    }


    editTitle(title){
        const titleEditedEvent = new CustomEvent(`titleChange${this.uniqueID}`, {
            detail:{
                text: title.text,
                eventTarget: 'title'
            }
        });
        
        console.log(titleEditedEvent.detail.text);

        window.dispatchEvent(titleEditedEvent);
    }


    createTask(newTask){
        const task = {
            text: newTask.text,
            done: false
        }        
        this.tasks.push(task);

        this.dispatchTaskListChangeEvent();
    }
    

    toggleTask(taskIndex){
        if(!this.tasks[taskIndex]){
            console.error('Invalid task index');
            return;
        }
        
        this.tasks[taskIndex].done = !this.tasks[taskIndex].done; 
        
        this.dispatchTaskListChangeEvent();
    }

    deleteTask(taskIndex){
        if(!this.tasks[taskIndex]){
            console.error('Invalid task index');
            return;
        };

        console.log('abc');

        this.tasks.splice(taskIndex, 1);

        this.dispatchTaskListChangeEvent();
    }


    dispatchTaskListChangeEvent(){
        const taskChangedEvent = new CustomEvent(`taskListChange${this.uniqueID}`, {
            detail: {
                tasks: this.tasks,
                eventTarget: 'tasklist'
            }
        });

        console.log(this.tasks);  

        window.dispatchEvent(taskChangedEvent);
    }
}