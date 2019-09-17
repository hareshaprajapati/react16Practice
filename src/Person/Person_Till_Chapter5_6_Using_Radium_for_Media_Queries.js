import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    const minWidthStyle = {
        '@media (min-width: 500px)' :  {
        width: '450px'
    }
    }
    return (
        <div className="Person" style={minWidthStyle}>
      <p onClick={props.onClick}> Hi I am {props.name} and I am {props.age} </p>
       <input type="text" onChange={props.changed} value={props.name}/>
        <p> {props.children} </p>
        </div>
            );
}

export default Radium(person);