import React, { Component } from 'react';
import Persons from '../components/Persons/Persons.js';
//import styled from 'styled-components';
//import Radium,{StyleRoot} from 'radium'
import Aux from '../hoc/Aux.js'


import './App.css';

import classes from './App.css'

import Cockpit from '../Cockpit/Cockpit.js'
import withClass from '../hoc/withClass.js'


/*
const StyledButton=styled.button`


background-color:${props=>props.alt?'red':'green'};
font:inherit;
border:1px solid blue;
padding:8px;
cursor:pointer;
color:white;
&:hover{
  background-color:${props=>props.alt?'salmon':'lightgreen'};
  color:black;
}


`
*/
class App extends Component {


  constructor(props){
    super(props)
    console.log('constructor')


  }

  state={
    persons:[
      {id:1,name:'Max',age:24},
      {id:2,name:'nesh',age:44},
      {id:3,name:"opo",age:45}
    ],
    showPersons:false,
    showCockpit:true,
    counter:0,
    IsAuthenticated:false
  }
  /*

 switchNameHandler = (newName) =>{
   // console.log('was clicked')
   this.setState({persons:[
    {name:newName,age:24},
    {name:'nesh',age:44},
    {name:"opo",age:45}
  ]})

  }
  */

static getDerivedStateFromProps(state,props){

  console.log('getting state',props)

  return state

}

componentDidMount(){

  console.log('commponent didi mount')
}


shouldComponentUpdate(nextProps,nextState){

  console.log('app.js should component update')
  return true

}

componentDidUpdate(prevProps,prevState){
  console.log('app.js componentdid update')


}

  nameHandler = (event,id) => {
    // console.log('was clicked')

    const personIndex=this.state.persons.findIndex(p=>{
      return p.id === id;

    });
    const person={...this.state.persons[personIndex]}
   // const person=Object.assign({},this.state.persons[personIndex])

   person.name=event.target.value
   const persons =[...this.state.persons];
   persons[personIndex]=person
    
    // console.log('was clicked')
    this.setState((prevState,props) =>{
    return {persons:persons,counter:prevState.counter+1} 
    }
   )
  
 
   }


   togglePersonsHandler=()=>{
     const doesShow=this.state.showPersons;
     this.setState({showPersons: !doesShow})

   }
   deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons]
     persons.splice(personIndex,1);
     this.setState({persons:persons})
   }

   loginHandler=()=>{

    this.setState({IsAuthenticated:true})
   }

  render() {

    /* const style={
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      color:'white',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };
    */

   
 


    let persons= null;
          if(this.state.showPersons){
            persons=(
        
                <Persons loggedIn={this.state.IsAuthenticated}  persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameHandler} />
      
            
              
              
            )


           
           /* style.backgroundColor='red';
            style[':hover']={
              backgroundColor:'salmon',
              color:'black'
            }
            */

          }


         // let classes = ['red','bold'].join(' ');
         let assignedClasses=[]

         if(this.state.persons.length<=2){
           assignedClasses.push(classes.red);
         }

         if(this.state.persons.length <=1){
           assignedClasses.push(classes.bold)
         }



 return (
    
  <Aux>
        <button onClick={()=>this.setState({showCockpit:false})}>
          cockpit


        </button>
        {this.state.showCockpit ? (
         <Cockpit 
         login={this.loginHandler}

         title={this.props.appTitle}
         personsLength={this.state.persons.length} showPersons={this.state.showPersons} toggle={this.togglePersonsHandler}   />

              ) : null      }
        
        {persons}

         
       
   </Aux>
     
   
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'heading'))
  }
}

export default withClass(App,classes.App );

/* <Person
name={this.state.persons[0].name}
 age={this.state.persons[0].age}
  />
<Person
name={this.state.persons[1].name} 
age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'fefe')}
change={this.nameHandler}
> my hobbies: racing</Person>
<Person
name={this.state.persons[2].name}
 age={this.state.persons[2].age}/>
 */

