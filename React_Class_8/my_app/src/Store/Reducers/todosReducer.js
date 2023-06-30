
const initialState = {
    todos: [],
    todoTitle: "",
    completion: false,

}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODO_TITLE":
            return {
                ...state,
                todoTitle: action.payload,
            };

            case "SET_TODO_COMPLETION":
                return {
                    ...state,
                    completion: action.payload
                } 

            case "ADD_TODO":
                return {
                    ...state,
                    todos: [...state.todos, action.payload],
                    todoTitle: "",
                }
            case "DELETE_TODO":
                return{
                    ...state,
                    todos: action.payload,
                }

            case "UPDATE_TODO":
                return {
                    ...state,
                    todos: action.payload
                }
                   
        default:
            return state;
    }
}