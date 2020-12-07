import {TodoList,Todo,ChangeEventTarget} from "./model";
import {TodoApi} from './api';
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

const lists = document.querySelector('#list');
const inputElement = document.querySelector("#js-form-input");
const countTarget = document.getElementById("total");
const checkTarget = document.getElementById("checked");

const todoList = new TodoList([]);

let index = todoList.length;
if (index === undefined){
    index = 1;
};

todoList.addChangeEventListener(updateTotal);
todoList.addChangeEventListener(updateCheckedTotal);
todoList.addChangeEventListener(function(){updateList(todoList)});

const asyncFetch = async() => {
    const response = await TodoApi.fetchTodo();
    todoList.bulkAdd(response.data);
}; 

asyncFetch();
    
inputElement.addEventListener('keypress', async function (e){
    if (e.key === 'Enter') {
        if (e.target.value === ""){ 
            return;
        }
        const todo = new Todo(e.target.value,index,false);
        index++;
        const todoRequest = makeTodoRequest(todo);
        try {
            await TodoApi.addTodo(todoRequest);
            todoList.add(todo);
        } catch(error){
            console.log(error);
        }; 
        e.target.value = "";    
    }
});

function makeTodoRequest(todo){
    const params = {
        id: todo.id,
        name: todo.name,
        check: todo.check
    };
    return params;
}

const stringToElement = string => {
    const template = document.createElement("template");
    template.innerHTML = string;
    const element = template.content.firstElementChild;
    return element;
}

function updateTotal(){
    countTarget.textContent = `${todoList.todos.length}`;
}

function updateCheckedTotal(){
    checkTarget.textContent = `${todoList.countCheck()}`;
}
function updateList(list){
    lists.textContent = ``;
    list.todos.forEach(function(todo){
        const checked = todo.check ? "checked" : "";
        const li = stringToElement(`<li> <input type='checkbox' ${checked}>　${todo.name} <span style = 'color:red'>X</span></li>`);
        if (todo.check) {
            li.classList.add("line");
        }
        const todoId = todo.id;
        lists.appendChild(li);
        const rawspan = li.getElementsByTagName("span");
        rawspan[0].addEventListener('click',async function(e){
            li.parentNode.removeChild(li);
            try {
                await TodoApi.deleteTodo(todoId);
                todoList.remove(todoId);
            } catch (err) {
                console.log(err);
            };
        });
        const rawcheckbox = li.getElementsByTagName("input");
        rawcheckbox[0].addEventListener('click',async function(e){
            const todoObj = makeTodoRequest(todo);
            const currBool = todoObj.check;
            todoObj.check = !currBool;
            try {
                await TodoApi.putTodo(todoObj,todoId);
                todo.reverseCheck();
                if (todo.check){
                    li.classList.add("line");
                } else {
                    li.classList.remove("line");
                }
                checkTarget.textContent = `${todoList.countCheck()}`;
            } catch (err) {
                console.log(err);
            };
            checkTarget.textContent = `${todoList.countCheck()}`;
        });
    });

}