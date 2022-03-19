import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr. Mahfuz', job: 'Singer'}
const singer2 = {name: 'Eva rahman', job: 'singer2'}
const singerStyle ={
  color: 'purple',
  backgroundColor: 'white',
  borderRadius: '10px',

}

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="BappaRaz" nayika="cheka"></Person>
      <Person name="kuber" nayika="kopila"></Person>
      <h5>new component</h5>
      <p id="totocompany">rock mama React mama.</p>
      <Friend movie="Singam" phone="017777"></Friend>
      <Friend phone="01999"></Friend>
      
    </div>
  );
}
function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayiyka: {props.nayika} </p>
    </div>
  )
}

function Friend(props){
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}


export default App;
