import React, {Component} from 'react';
import classes from './Person.css'
import withCClass from "../../../hoc/withCClass";

class Person extends Component{

    /*static getDerivedStateFromProps(props, state){
        console.log('Person.js getDerivedStateFromProps', props, state);
        return state;
    }*/

    render(){
        console.log('person.js render');
        if(false && Math.random() > 0.6) throw new Error('Went wrong')
        return (
            <React.Fragment >
                <p onClick={this.props.onClick}> Hi I am {this.props.name} and I am {this.props.age} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <p> {this.props.children} </p>
            </React.Fragment>
        /*{<div className={classes.Person} >
            <p onClick={this.props.onClick}> Hi I am {this.props.name} and I am {this.props.age} </p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            <p> {this.props.children} </p>
        </div>}*/
        );
    }
    
}

export default withCClass(Person, classes.Person);