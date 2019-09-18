import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect( () => {
        console.log('cockpit.js useEffect');
        return () => {
            console.log('cockpit.js cleanup work in useEffect'); // works like ngOnDestroy
        }
    // }, [props.persons]) // run when persons changed
    }, []) // run first time only

    useEffect( () => {
        console.log('cockpit.js useEffect without argument');
        return () => {
            console.log('cockpit.js cleanup work in useEffect  without argument');
        }

    }) // run every time

    console.log('cockpit.js render');
    let btnClasses = ''
    if (props.showPersons) {
        btnClasses = classes.Red;
    }
    const h1ClassNames = [];
    if (props.personsLength <= 2) h1ClassNames.push(classes.Red)
    if (props.personsLength <= 1) h1ClassNames.push(classes.Bold)
    return (
        <div className={classes.Cockpit}>
        <p className={h1ClassNames.join(' ')}>{props.title}</p>
    {/*The problem with this syntax is that a different callback is created each time the LoggingButton renders
    () => this.togglePerson()
    */}
    <button className={btnClasses}   onClick={props.clicked}>show persons</button>
        </div>
    );
}

export default React.memo(cockpit); // dont render if nothing changed, performance optimzations, like shouldComponentUpdate