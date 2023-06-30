
import { useDispatch, useSelector } from "react-redux";



const AddTodo = () => {

    const dispatch = useDispatch();

    const todoTitle = useSelector((state) => state.todoTitle);
    const completion = useSelector((state) => state.completion);

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
        <div>
            <form onSubmit={handleAddTodo}>
            <label htmlFor="todo-title">todo:</label>
            <input onChange={handleChangtodoTitle} type="text" id="todo-title" />
            <br />
            <hr />
            <label htmlFor="todo-status">Completed?</label>
            <input onChange={handleChangeCompletionStatus} type="checkbox" id="todo-status" />
            <br />
            <hr />
            <button type="submit">Add Todo</button>
            </form>
        </div>
    )


}

export default AddTodo