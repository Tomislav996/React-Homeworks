
import { Provider } from 'react-redux'
import store from './Store'
import AddTodo from './Components/AddTodo/AddTodo'
import Todos from './Components/Todos/Todos'

import './App.css'

function App() {


  return (
    <>
    <Provider store={store}>
      <AddTodo/>
      <Todos/>
    </Provider>
    
    </>
  )
}

export default App
