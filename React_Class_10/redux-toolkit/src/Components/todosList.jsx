import { useSelector } from "react-redux"
import { removeTodo } from "../store/slices/todoSlice";
import { useDispatch } from "react-redux";

export const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch()

    const handleRemoveTodo = (todoId) => {

        let filteredTodos = todos.filter((todo) => todo.id !== todoId)

        dispatch(removeTodo(filteredTodos))
    }
    


    return (
        <div> Todos List:
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button onClick={() => handleRemoveTodo(todo.id)}>Remove Todo</button>
                </div>
            ))}
        </div>
    )
}