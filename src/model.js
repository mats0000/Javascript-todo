export class Todo {
    constructor(name,id,check) {
        this.name = name;
        this.id = id;
        this.check = check;
    }
    reverseCheck(){
        this.check = !this.check;
    }
} 

export class ChangeEventTarget {
    constructor () {
        this.uniqueFunc = new Set();
    }
    addChangeEventListener(func) {
        this.uniqueFunc.add(func);
    }
    execCallback(){
        for (let func of this.uniqueFunc) func();
    }
}

export class TodoList extends ChangeEventTarget{
    constructor(todos,functions) {
        super();
        this.todos = todos;
    }
    changed(){
        super.execCallback();
    }
    add(todo){
        this.todos.push(todo);
        this.changed();
    }
    bulkAdd(todoArray){
        for (let i = 0; i < todoArray.length; i++){
            const todo = new Todo(todoArray[i].name,todoArray[i].id,todoArray[i].check);
            this.todos.push(todo);
        };
        this.changed();
    }
    remove(id){
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.changed();
    }
    countCheck(){
        return this.todos.filter(todo => todo.check == true).length;
    }
}