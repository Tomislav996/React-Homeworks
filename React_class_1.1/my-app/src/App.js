import logo from './logo.svg';
import './App.css';
import Header from './Component_Header/Header';
import Todos from './Component_Header/Todos/Todos';
import Counter from './Component_Header/Counter/Counter';

function App() {
  return (
    <div>
      <Header/>
      <Todos message="Today todos list:" description="List of Todos"/>
      <Counter/>
    </div>
  );
}

export default App;
