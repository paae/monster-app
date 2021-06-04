import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './component/card-list/card-list-component';

import SearchBox from './component/search-box/search-box';

class App extends Component {
 


  state = { 
    monsters:[ ],
    searchField:''
  }

 
 
//fetching data from api 
//api request
componentDidMount(){
fetch("https://jsonplaceholder.typicode.com/users")

.then(res =>res.json())
.then (result=> this.setState({monsters: result}));
}

handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}
  
  render() { 
    const {searchField,monsters}=this.state
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (  
    <div className="App">
    <h1>monster Rolodex</h1>
    <SearchBox placeholder="search monster" 
    handleChange={this.handleChange}
     />
    
    <CardList monsters={filteredMonsters}/>


    </div>);
  }
}
 
export default App;