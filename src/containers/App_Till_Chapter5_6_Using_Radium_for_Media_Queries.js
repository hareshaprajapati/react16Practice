import React, {Component} from 'react';
import './App.css';
import Person from "./components/persons/Person/Person";
import Radium, { StyleRoot } from 'radium';

class App extends Component {

    personss = [
        {id: 1, name: 'Mishty', age: 3},
        {id: 2, name: 'Haresh', age: 28},
        {id: 3, name: 'Milan', age: 26}
    ];

    constructor() {
        super();
        this.state = ({
            persons: this.personss,
            other: 'other',
            showPersons: false
        })
    }


    togglePerson = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    deletePersonHandler(index) {
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

    nameChanged(id, event) {
        const personIndex = this.state.persons.findIndex(p => p.id === id)
        const person = {...this.state.persons[personIndex]};
        // const person = Object.assign({} , this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    }

    render() {
        const btnStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            padding: '8px',
            border: '1px solid blue',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'yellow',
                color: 'black'
            }
        };
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) =>
                            <Person changed={this.nameChanged.bind(this, person.id)} key={person.id}
                                    onClick={this.deletePersonHandler.bind(this, index)} name={person.name}
                                    age={person.age}> My Life is Mishty</Person>)
                    }
                </div>
            );
            btnStyle.backgroundColor = 'red';
            btnStyle[':hover'] = {
                backgroundColor: 'orange',
                color: 'black'
            }
        }
        const h1ClassNames = [];
        if (this.state.persons.length <= 2) h1ClassNames.push('Red')
        if (this.state.persons.length <= 1) h1ClassNames.push('Bold')
        return (

            <div className="App">
                <p className={h1ClassNames.join(' ')}>Hi cool</p>
                {/*The problem with this syntax is that a different callback is created each time the LoggingButton renders*/}
                <button style={btnStyle} onClick={() => this.togglePerson()}>show persons</button>
                <StyleRoot>
                {persons}
                </StyleRoot>
            </div>

        );
    }

    //  return React.createElement('div', { className: 'App'} , React.createElement('h1',{} , 'Hi Cools'));
}

export default Radium(App);

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