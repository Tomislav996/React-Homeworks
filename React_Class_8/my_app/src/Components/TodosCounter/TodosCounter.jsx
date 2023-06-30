
import { useDispatch, useSelector } from "react-redux";

import "./TodosCounter.css"

import { useEffect } from "react";

const TodosCounter = () => {

    const totalTodos = useSelector((state) => state.TodosCounterReducer.totalTodos);
    const completedTodos = useSelector((state) => state.TodosCounterReducer. totalCompletedTodos);
    const todos = useSelector((state) => state.todosReducer.todos)
    const dispatch = useDispatch();

    const handleCountTotalTodos = () => {
        dispatch({type: "TOTAL_TODOS", payload: todos.length})
    }

    const handleCountCompletedTodos = () => {

       let countCompleted = 0;

        for(let todo of todos) {
            if(todo.completion) {
                countCompleted ++
            }
        }

        dispatch({type: "TOTAL_COMPLETED_TODOS", payload: countCompleted})
    }

    useEffect(() => {
        handleCountTotalTodos()
        handleCountCompletedTodos()
    }, [todos])

  return (
    <div className="counters-container">
        <p>Total Todos: {totalTodos}</p>
        <p>Completed Todos: {completedTodos}</p>
    </div>
  )
}

export default TodosCounter