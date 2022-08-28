import React,{Component} from 'react'
import './App.css';
import Nav from './nav.js'
import About from './about.js'
import Shop from './shop.js'
import {signInWithGoogle} from '../src/firebaseAuth'
import {auth} from '../src/firebaseAuth'

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
class App extends Component{
  constructor(){
    super();
    this.State ={
      currentUser :undefined,
      // image:undefined
    }

  }

componentDidMount(){
  auth.onAuthStateChanged(user =>{
    this.setState({ currentUser: user })
    console.log(user._delegate.photoURL);
    // this.setState= ({image:user._delegate.photoURL})
  })
}

render(){
  return (
    <Router>
       <div className="App">
        <Nav/>
        <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          
          <button onClick={signInWithGoogle}>SignIn </button>
          {/* <img style={{borderRadius:50%}} src={'https://lh3.googleusercontent.com/a-/AFdZucrOdRT3Esz3zddSxn_IQdpVy9guHeSvZM0K6Pl4Cw=s96-c'}></img> */}
      </div>
    </Router>
     
  );
}
}

const Home =()=>(
    <div>
    <h1> Home </h1>
  </div>
  
)
export default App;
