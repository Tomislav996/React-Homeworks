import { useDispatch, useSelector } from "react-redux";

import "./Todos.css"

const Todos = () => {
  const todos = useSelector((state) => state.todosReducer.todos);

  const dispatch = useDispatch()

  const handleDeleteTodo = (todoId) => {
    if(todos.length === 0) {
      return
    }

    const filteredTodos = todos.filter((todo) => todo.id !== todoId)
    dispatch({type: "DELETE_TODO", payload: filteredTodos})

  }


  const handleUpdateTodo = (todoId) => {

    const updatedTodos = todos.map((todo) => {
      if(todo.id === todoId) {
        return {
          ...todo,
          completion: !todo.completion
        }
      }
      return todo;
    })

    dispatch({type: "UPDATE_TODO", payload: updatedTodos})

  }

  return (
    <div>
      <h2>Todos list:</h2>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo-container" key={todo.id}>
            <p>Title: {todo.title}</p>
            <label htmlFor="status">Completion Status:</label>
            <input onChange={() => handleUpdateTodo(todo.id)} type="checkbox" id="status" checked={todo.completion} />
            <hr/>
            <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
