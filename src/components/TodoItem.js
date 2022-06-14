import React, {useContext} from 'react';
import Check from "./Check";
import {Context} from "../context/context";
import '../App.css';

const TodoItem = ({todo}) => {
    const {
        todos, setTodos
    } = useContext(Context);
    //Меняем состояние задачи
    const changeCompletedTodo = (todo) => {
        const changeTodo = {...todo, isFinish: !todo.isFinish}
        setTodos(todos.map(item => item.id === todo.id ? changeTodo : item))
    }

    return (
        <li onClick={(e) => {
            changeCompletedTodo(todo)
        }}>
            <span> <Check todo={todo}/></span>
            <span className={todo.isFinish ? "completed-todo" : undefined}>{todo.title}</span>
        </li>
    );
};

export default React.memo(TodoItem);