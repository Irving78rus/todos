import React, {useContext, useState} from 'react';
import Setting from '../Setting/Setting';
import TodoItem from "../TodoItem";
import {Context} from "../../context/context";
import uniqid from 'uniqid';

function TodoList() {
    const [inputValidate, setInputValidate] = useState(true);
    const {todo, setTodo, setTodos, filteredTodos} = useContext(Context);

    // функция проверяет была ли введена новая Таска, и если да, то добавляет ее в список
    // Если была попытка ввода пустой такси выдает ошибку
    const addTodo = () => {
        if (todo) {
            setInputValidate(true)
            const newTasks = {
                id: uniqid(),
                title: todo,
                isFinish: false
            }
            setTodos(prev => [...prev, newTasks])
            setTodo('')
        } else {
            setInputValidate(false)
        }
    }

    return (
        <div>
            <div className='addTodoBlock'>
                <input data-testid="input-id" type="text"
                       placeholder='What needs to be done' value={todo}
                       onChange={(e) => {
                           setTodo(e.target.value)
                       }}/>
                <button onClick={addTodo}>Add todo</button>
            </div>
            {!inputValidate && <p> The task cannot be empty </p>}
            <ul>
                {filteredTodos.map(item => <TodoItem key={item.id} todo={item}/>)}
            </ul>
            <Setting/>
        </div>
    );
}

export default React.memo(TodoList);