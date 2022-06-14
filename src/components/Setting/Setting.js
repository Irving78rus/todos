import React, {useContext} from 'react';
import {Context} from "../../context/context";

const Setting = () => {
    const {
        todos, setTodos, itemsLeft, setFilteredTodos
    } = useContext(Context);
// >>> Набор функций для фильтрации списка задач
    const showAllTasks = () => {
        setFilteredTodos(todos)
    }
    const showActiveTasks = () => {
        let activeTasks = todos.filter(item => item.isFinish === false)
        setFilteredTodos(activeTasks)
    }
    const showCompletedTasks = () => {
        let completedTasks = todos.filter(item => item.isFinish === true)
        setFilteredTodos(completedTasks)
    }
    const clearCompletedTasks = () => {
        setTodos(todos.filter(item => item.isFinish === false))
    }
// <<< Набор функций для фильтрации списка задач
    return (
        <div className='option'>
            <div>{itemsLeft} items left</div>
            <div className='setting-option' onClick={showAllTasks}>all</div>
            <div className='setting-option' data-testid="showActiveTasks-id" onClick={showActiveTasks}>active</div>
            <div className='setting-option' onClick={showCompletedTasks}>completed</div>
            <div className='setting-option' onClick={clearCompletedTasks}>Clear Completed</div>
        </div>
    );
};

export default Setting;