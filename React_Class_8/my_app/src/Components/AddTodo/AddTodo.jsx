
import { useDispatch, useSelector } from "react-redux";

import "./AddTodo.css"



const AddTodo = () => {

    const dispatch = useDispatch();

    const todoTitle = useSelector((state) => state.todosReducer.todoTitle);
    const completion = useSelector((state) => state.todosReducer.completion);

    const handleChangtodoTitle = (event) => {
        dispatch({type: "SET_TODO_TITLE", payload: event.target.value})
    }

    const handleChangeCompletionStatus = (event) => {
        dispatch({ type: "SET_TODO_COMPLETION", payload: event.target.checked });
      };
      

    const handleAddTodo = (event) => {

        event.preventDefault()

        if (!todoTitle.trim()) {
            return;
          }

        const todo = {
            id: Date.now(),
            title: todoTitle,
            completion: completion
        }

        dispatch({type: "ADD_TODO", payload: todo})

    }

    return (
        <div className="add-todo-section">
            <h2>Add Todo Form</h2>
            <form onSubmit={handleAddTodo}>
            <label htmlFor="todo-title">todo:</label>
            <input onChange={handleChangtodoTitle} value={todoTitle} type="text" id="todo-title" />
            <br />
            <label htmlFor="todo-status">Completion Status: </label>
            <input onChange={handleChangeCompletionStatus} type="checkbox" id="todo-status" />
            <br />
            <button type="submit">Add Todo</button>
            </form>
        </div>
    )


}

export default AddTodo