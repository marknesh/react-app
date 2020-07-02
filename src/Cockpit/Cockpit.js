import React , {useEffect ,useRef,useContext}from 'react'


import classes from './Cockpit.css'
import AuthContext from '../context/auth-context.js'


const cockpit =(props)=>{

  const authenticate = useContext(AuthContext)
  const buttonToggler= useRef(null)
  useEffect( () => {

    console.log('useEffect')

    // const timer=setTimeout(()=>{
    // alert('hi there')

    // },1000


    // );

  buttonToggler.current.click()
    return () =>{
      //clearTimeout(timer)

      console.log('unmounted cleanupwork')
    };
  },[]


  )

  useEffect(()=>{
    console.log('useeffect two')

    return () =>{

      console.log('unmounted cleanupwork in two only')
    };


  }


  )

    let assignedClasses=[]

    if(props.personsLength<=2){
      assignedClasses.push(classes.red);
    }

    if(props.personsLength <=1){
      assignedClasses.push(classes.bold)
    }

    let btnClass=''


    if(props.showPersons){


        btnClass=classes.Red
    }

    return (
        <div className={classes.Cockpit}>


    <h1>{props.title}</h1>
    <p className={assignedClasses.join(' ')}>This is really working</p>
    <button ref={buttonToggler} className={btnClass}
              onClick={props.toggle}>Switch Name</button>
              {/* <AuthContext.Consumer>
              {(context) =><button onClick={context.login}>login</button>}

              </AuthContext.Consumer> */}
              <button onClick={authenticate.login}>login</button>



              </div>

    )
}



    export default React.memo(cockpit);