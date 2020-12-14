import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export class TodoApi {
    static fetchTodos(){
        return axios.get(`${BASE_URL}/todos`);
    }
    
    static addTodo(todo){
        return axios.post(`${BASE_URL}/todos`, todo);
    }
    static putTodo(todo,id){
        return axios.put(`${BASE_URL}/todos/${id}`, todo);
    }
    static deleteTodo(id){
        return axios.delete(`${BASE_URL}/todos/${id}`);
    }
}