import axios from 'axios';
import {TodoApi} from './api';
import regeneratorRuntime from "regenerator-runtime";

export async function asyncFetchApi() {
    const response = await TodoApi.fetchTodos();
    const todos = await response.data;
    return todos;    
}

export async function asyncAddTodo(todoObj) {
    const response = await TodoApi.addTodo(todoObj);
    return response;
}

export async function asyncUpdateCheck(todoObj,id) {
    const response = await TodoApi.putTodo(todoObj,id);
    return response;
}

export async function asyncDeleteTodo(id){
    const response = await TodoApi.deleteTodo(id);
    return response;
}