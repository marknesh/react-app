import React , {Component} from 'react';
import classes from './Person.css'

import AuthContext from '../../../context/auth-context.js'



import Aux from '../../../hoc/Aux.js'
import withClass from '../../../hoc/withClass.js';

// import styled from 'styled-components';

/*
const StyledDiv=styled.div`

    margin:16px auto;
    width:60%;
    border:1px solid grey;
    box-shadow:0 2px 3px blue;
    padding:16px;
    text-align: center;

    @media (min-width:500px){
        width:450px

    }


`;
*/


class Person extends Component{

   /* const style={
        '@media (min-width:500px)':{
            width:'450px'

        }
    }
    */ 

    constructor (props){
        super(props)

        this.inputElement=React.createRef()


    }

    static contextType = AuthContext

    componentDidMount(){

        this.inputElement.current.focus()
        console.log(this.context.authenticate)
    }
   render(){
    console.log('small renderring')
    return (
      


  <Aux>  
      {/* <AuthContext.Consumer  > 

          {(context) => context.authenticate? <h2>Authenticated</h2> : <h3>please log in</h3> }
            </AuthContext.Consumer> */}

              {this.context.authenticate? <h2>Authenticated</h2> : <h3>please log in</h3> }
      
    <p key="item1" onClick={this.props.click}>I'm a {this.props.name} and  I am {this.props.age} years old!</p>
    <p  key="item2">{this.props.children}</p>
    <input /*ref={(inputEl) => {this.inputFocus=inputEl}}*/ ref={this.inputElement}  key="item3" type="text" onChange={this.props.change} value={this.props.name}/>
  
    </Aux>
     
  
    )


   }
   
};



export default withClass(Person , classes.Person);