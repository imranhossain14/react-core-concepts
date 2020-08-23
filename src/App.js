import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';

function App() {
 // use javascript to declear variable
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Bappi']
  const product =[
    {name : 'Photoshop', price : '$90.00'},
    {name : 'Illustrator', price : '$50.00'},
    {name : 'PDF Reader', price : '$5.41'},
    {name : 'Premium Element', price : '$25.41'}
  ]

  const nayoksNames = nayoks.map(nayok=> nayok); 
  // jehetu single property tai nayok object hole nayoks.name hoto
   console.log(nayoksNames);

  return (
    // here write dynamic HTML
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            product.map(products => <li>{products.name}</li>)
          }
        </ul>
          {
            product.map(pd =><Product product={pd}></Product>)
          }
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p>My First React Paragraph</p>
        
      
        {/* <Product name ={product[0].name} price ={product[0].price}></Product> */}
       
        <Product product= {product[0]} ></Product>
        <Product product= {product[1]} ></Product>
        <Person1 name="Imran" job ="football"></Person1>
        <Person name ={nayoks[0]} nayika ="Mousumi" food ="fuska"></Person>
        <Person name ={nayoks[1]} nayika ="shabana"></Person>
        <Person name ={nayoks[2]} nayika ="bobita"></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// create component means like you make HTML tag
function Person (props){
  // make style -> put css property here
  const personStyle = {
    border : '2px solid red', 
    margin : '10px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      {/* another way to set style */}
      {/* <div style={{border : '2px solid red', margin : '10px'}}></div> */}
    <h1>Nayok : {props.name}</h1>
        <h3>Naiyka : {props.nayika}</h3>
    </div>)
}


//web state
function Counter(){
  //syntax const [statename, function which set state] = useState(0); useState ke bola hoi react er hook
  const [count, setCount] = useState(10);
  // const handleIncrease = ()=> setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      {/* <button onClick= {handleIncrease}>Increase</button> */}
      <button onMouseMove= {()=> setCount(count - 1)}>Decrease</button>
      <button onClick= {()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Person1(props){
  return (
    <div style = {{border: "2px solid gold", width : '400px'}}> 
      <h3>My Name : {props.name}</h3>
      <p>My Profession : {props.job} </p>
    </div>
  )
}



function Product(props){
  // declare style for product
  const productStyle ={
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left'

  }
  //destructuring 

  const {name, price} = props.product;
  console.log(name,price);
  return(
    <div style={productStyle}>
        {/* <h3>{props.product.name}</h3>
        <h5>{props.product.price}</h5> */}
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
          
    </div>
  )
}

function Users(){
  //data load from API
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic User :{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
 
export default App;
