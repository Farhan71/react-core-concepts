import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {

 var person1 = {
   Name: "Farhan",
   Job: "Developer"

 }
 var person2 = {
   Name: "Osman",
   Job: "Engineer"
 }

 var  style = {
   backgroundColor :"cyan",
   color : "black",
   padding: "10px",
   borderRadius : "15px",
   boxShadow : "2px 2px 15px white"
 }

 var players = ["Shakib al Hasan", "Tamim", "Mushfiq"]

 const products = [
   {title:"Mobile", price:"15,000 Tk"},
   {title:"Laptop", price: "50,000 TK"},
   {title: "Earphone", price: "330 TK"}
 ]

 const heroes = ["Abdur Razzaq", "Bulbul Ahmed", "Faruk", "Alomgir", "Jafor", "Eliyas"];
//  const heroNames = heroes.map (hero => hero );

 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done from <code>src/App.js</code> and saved to reload.
        </p> */}

        <p>My First React Paragraph </p>
        <h3 style = {style} >I am {person1.Job +" "+ person1.Name}</h3>
        <h4>My Friend is {person2.Job +" "+ person2.Name}</h4> <br/>

        <Person name={players[0]} title="Match"></Person>
        <Person name="Tamim Iqbal" title="Tournament"></Person>
        <Person name="Mustafizur Rahman" title="Week"></Person>

        <Product prod={products[0]}> </Product>
        <Product prod={products[1]}> </Product>
        <Product prod={products[2]}> </Product>

        <br/><br/><br/><br/>

        {
          products.map ( pd => <Product prod = {pd}></Product>)
        }

        <ul>
          {/* <li>{heroes[0]}</li>
          <li>{heroes[1]}</li>
          <li>{heroes[2]}</li>
          <li>{heroes[3]}</li>
          <li>{heroes[4]}</li>
          <li>{heroes[5]}</li> */}
          {
            heroes.map (hero => <li>{hero}</li>)
          }
          <br/> <br/>
          {
            products.map (pd => <li>{pd.title}</li>)
          }
        </ul>

        <Counter></Counter>

        <Users></Users>





        {/* <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React now
        </a> */}
      </header>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    borderRadius: "15px",
    padding: "5px 20px"

  }
  return(
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <h2>Player of the {props.title}</h2>
    </div>
  )
}

function Product(props){
  const ProductStyle = {
    border: "2px solid grey",
    borderRadius: "10px",
    height: "250px",
    width: "250px",
    margin: "10px",
    padding: "10px",
    color: "white",
    backgroundColor: "black"
    
  }
  const {title, price} = props.prod;
  return(
    <div style={ProductStyle}>
      <h1>{title}</h1>
      <h3>{ price}</h3>
      <button>Buy Now</button>
    </div>
  )
}


function Counter (){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount); 
  // }
  const handleIncrease = () => setCount(count+1); 
  const handleDecrease = () => setCount(count-1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button><br/><br/>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data) );
  },[])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map (user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
