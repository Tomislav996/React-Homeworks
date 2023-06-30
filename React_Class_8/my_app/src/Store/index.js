
import {legacy_createStore as createStore, combineReducers} from "redux";

import { todosReducer } from "./Reducers/todosReducer";
import { TodosCounterReducer } from "./Reducers/TodosCounterReducer";

const rootReducer = combineReducers({
    todosReducer,
    TodosCounterReducer,
})

const  store = createStore(rootReducer);

export default store