
import {legacy_createStore as createStore} from "redux";

import { todosReducer } from "./Reducers/todosReducer";


const  store = createStore(todosReducer);

export default store