
import './App.css';
import Academies from './Componets/Academies/Academies';
import Card from './Componets/Card/Card';
import Counter from './Componets/Counter/Counter';

function App() {

  
  const academies = [
    {id: 1, name:"Academy for Programming", description: "Description for the first academy"},
    {id: 2, name:" Academy for Web Design", description:"Description for the second academy"},
    {id: 3, name:" Academy for Game Design", description:"Description for the third academy"},
    {id: 4, name:" Dev Ops", description:"Description for the fourth academy"},
    {id: 5, name:" Cyber Security", description:"Description for the fifth academy"}
  ]

  return (
  <>
       <h1 className='card-header'>Exercise 1</h1>
    <div className="card-container">
      <Card title="Card Title 1" content="Content for card title 1" imageUrl="https://picsum.photos/id/50/200/300"/>
      <Card title="Card Title 2" content="Content for card title 2" imageUrl="https://picsum.photos/id/200/200/300"/>
      <Card title="Card Title 3" content="Content for card title 3" imageUrl="https://picsum.photos/id/40/200/300"/>
      <Card title="Card Title 4" content="Content for card title 4" imageUrl="https://picsum.photos/id/500/200/300"/>
      <Card title="Card Title 5" content="Content for card title 5" imageUrl="https://picsum.photos/id/700/200/300"/>
    </div>
    <h1 className='academies-header'>Exercise 1.5</h1>
    <Academies academies={academies} name="SEDC"/>
    <h1 className='counter-header'>Exercise 2</h1>
    <Counter/>
  </>

  );
}

export default App;
