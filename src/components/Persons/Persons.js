

import React,{PureComponent} from 'react'

import Person from './Person/Person.js'

class Persons extends PureComponent{

  static getDerivedState(props,state){
    console.log('person.js get derived state',props)
  

    return state


  }


  // shouldComponentUpdate(nextProps,nextState){
  //   if(nextProps.persons !== this.props.persons|| nextProps.changed.persons !== this.props.persons || nextProps.clicked !== this.props.clicked){

  //   return true

      
  //   }

  //   else{
  //     return false
  //   }
  // }
  //save before update

  getSnapshotBeforeUpdate(prevProps,prevState){

    console.log('get snapshot before update')
    return {message:'Snapshot'};
  }


  //snapshot show update
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('component did update')
    console.log(snapshot)


  }
//do before removing component like toogle person
  componentWillUnmount(){
    alert("removing person component")

    console.log('component will umount')
  }


  render(){
    console.log('renderiiing Person main') 
return this.props.persons.map((person,index)=>{
   return <Person 
   notLoggedIn={this.props.loggedIn}
       click={()=>this.props.clicked(index)}
       name={person.name}  age={person.age}
       change={(event)=>this.props.changed(event,person.id)}
         key={person.id}>hey this is a child element </Person>
    })


  }
};



export default Persons;