import React from 'react';
import classes from './Person.css'

const person = (props) => {
    if(Math.random() > 0.6) throw new Error('Went wrong')
    return (
        <div className={classes.Person} >
      <p onClick={props.onClick}> Hi I am {props.name} and I am {props.age} </p>
       <input type="text" onChange={props.changed} value={props.name}/>
        <p> {props.children} </p>
        </div>
            );
}

export default person;