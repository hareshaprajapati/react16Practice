import React from 'react';
import classes from './Person.css'

const person = (props) => {
    return (
        <div className={classes.Person} >
      <p onClick={props.onClick}> Hi I am {props.name} and I am {props.age} </p>
       <input type="text" onChange={props.changed} value={props.name}/>
        <p> {props.children} </p>
        </div>
            );
}

export default person;