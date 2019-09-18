import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import withCClass from "../hoc/withCClass";

class App extends Component {

    personss = [
        {id: 1, name: 'Mishty', age: 3},
        {id: 2, name: 'Haresh', age: 28},
        {id: 3, name: 'Milan', age: 26}
    ];

    constructor() {
        super();
        console.log('app.js constructor');
        this.state = ({
            persons: this.personss,
            other: 'other',
            showPersons: false,
            showCockpit: true,
            changeCounter: 0
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('app.js getDerivedStateFromProps', props, state);
        return state;
    }

    componentDidMount() {
        console.log('app.js componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('app.js shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('app.js componentDidUpdate', prevProps, prevState);
        console.log(snapShot)
    }

    togglePerson = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        // const persons = this.state.persons.slice();
        // const persons = Object.assign([],this.state.persons);
        console.log(persons, this.state.persons)
        persons.splice(index, 1);
        console.log(persons, this.state.persons)
        this.setState({
            persons: persons
        })
    }

    nameChanged = (id, event) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id)
        const person = {...this.state.persons[personIndex]};
        // const person = Object.assign({} , this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState((prevState, props) => {
                return {persons: persons, changeCounter: prevState.changeCounter + 1}
            }
        )
    }

    render() {
        console.log('app.js render');
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons}
                             changed={this.nameChanged}
                             onClick={this.deletePersonHandler}/>
                </div>
            );
        }
        return (
            <React.Fragment>
                <button onClick={() => this.setState({showCockpit: false})}>remove cockpit</button>
                {
                    this.state.showCockpit ? <Cockpit title={this.props.title} clicked={this.togglePerson}
                                                      personsLength={this.state.persons.length}
                                                      showPersons={this.state.showPersons}/> : null
                }

                {persons}
            </React.Fragment>
            /* {<WithClass classes={[classes.App, 'AppGlobal'].join(' ')}>
                 <button onClick={() => this.setState({showCockpit: false})}>remove cockpit</button>
                 {
                     this.state.showCockpit ?  <Cockpit title={this.props.title} clicked={this.togglePerson}
                                                        personsLength={this.state.persons.length}
                                                        showPersons={this.state.showPersons}/> : null
                 }

                 {persons}
             </WithClass>}*/
        );
    }

    //  return React.createElement('div', { className: 'App'} , React.createElement('h1',{} , 'Hi Cools'));
}

export default withCClass(App, classes.App);

/*

import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const app = () => {
   const personss = [
        {name: 'Haresh', age: 28},
        {name: 'Mishty', age: 3},
        {name: 'Milan', age: 26}
    ];
    const [personState, stateHandler] = useState({
        persons: personss,
    })
    const other = useState('Mishty')
    console.log(personState, other)
    const swithNameHandler = () => {
        personss[0].name = 'Harry';
        stateHandler(
            {persons: personss}
            )
    }


        return (
            <div className="App">
                <h1>Hi cool</h1>
                <button onClick={swithNameHandler}>Switch me</button>
                <Person name={personState.persons[0].name} age={personState.persons[0].age}> My Life is Mishty</Person>
                <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
                <Person name={personState.persons[2].name} age={personState.persons[2].age}> </Person>

            </div>

        );
        //  return React.createElement('div', { className: 'App'} , React.createElement('h1',{} , 'Hi Cools'));
}

export default app;



 */