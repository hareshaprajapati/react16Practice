import React,{Component} from 'react';
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Person from "./Person/Person";

class Persons extends Component{
    /*static getDerivedStateFromProps(props, state){
        console.log('Persons.js getDerivedStateFromProps', props, state);
        return state;
    }*/

    /*
    // not supported in latest version
    componentWillReceiveProps(props){
        console.log('Persons.js componentWillReceiveProps', props);
    }*/

    shouldComponentUpdate(nextProps, nextState){
        console.log('Persons.js shouldComponentUpdate', nextProps, nextState);
        return true || nextProps.persons !== this.props.persons
            || nextProps.onClick !== this.props.onClick
        || nextProps.changed !== this.props.changed
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Persons.js getSnapshotBeforeUpdate', prevProps, prevState);
        return {message: 'Hi cool!!!'}
    }

 /*
    // not supported in latest version
    componentWillUpdate(){
        console.log('Persons.js componentWillUpdate');
    }*/
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('Persons.js componentDidUpdate',prevProps, prevState);
        console.log(snapShot)
    }

    render() {
        console.log('persons.js render');
        return   (
            this.props.persons.map((person, index) =>
                <ErrorBoundry key={person.id}>
                    <Person isAuthenticated={this.props.isAuthenticated} changed={(event) => this.props.changed(person.id, event)}
                            onClick={() => this.props.onClick(index)} name={person.name}
                            age={person.age}> My Life is Mishty</Person>
                </ErrorBoundry>)
        );
    }
}


export default Persons;