import './App.css';
import TodoList from "./components/TodoList/TodoList";
import {useEffect, useState} from 'react';
import {Context} from "./context/context";

function App() {
    const [todo, setTodo] = useState('')
    const [itemsLeft, setItemsLeft] = useState(0)
    const [todos, setTodos] = useState([
        {id: 1, title: "Tasks 1", isFinish: false},
        {id: 2, title: "Tasks 2", isFinish: true},
        {id: 3, title: "Tasks 3", isFinish: false},
        {id: 4, title: "Tasks 4", isFinish: false},
        {id: 5, title: "Tasks 5", isFinish: false},
    ])
    //Копирую список задач, для последующей фильтрации
    const [filteredTodos, setFilteredTodos] = useState(todos)
    //Поддерживаю копию задач в актуальном состоянии
    useEffect(() => {
        setFilteredTodos(todos)
        let completedTodo = todos.filter(item => item.isFinish === false)
        setItemsLeft(completedTodo.length)
    }, [todos])

    return (
        <div className="App">
            <Context.Provider
                value={{todos, todo, setTodo, setTodos, filteredTodos, setFilteredTodos, itemsLeft}}
            >
                todos
                <div className="wrapper">
                    <TodoList/>
                </div>
            </Context.Provider>
        </div>
    );
}

export default App;
