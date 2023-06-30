import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <hr />
      <br />
      <h2>Todos list:</h2>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <input type="checkbox" checked={todo.completion} />
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
