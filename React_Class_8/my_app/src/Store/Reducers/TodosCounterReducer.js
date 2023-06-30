const initialState = {
    totalTodos: 0,
    totalCompletedTodos:0
}

export const TodosCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOTAL_TODOS":
            return {
                ...state,
                totalTodos: action.payload
            }

        case "TOTAL_COMPLETED_TODOS":
            return {
                ...state,
                totalCompletedTodos: action.payload
            }
        default:
            return state;
    }
}