import React, {Component} from 'react';
import classes from './Person.css'
import withCClass from "../../../hoc/withCClass";
import PropTypes from 'prop-types'
import AuthContext from "../../../context/AuthContext";

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElRef = React.createRef();
    }

    static contextType = AuthContext;
    /*static getDerivedStateFromProps(props, state){
        console.log('Person.js getDerivedStateFromProps', props, state);
        return state;
    }*/

    componentDidMount(){
        // this.inputEl.focus();
        this.inputElRef.current.focus();
        console.log(this.context.isAuthenticated);
    }

    render() {
        console.log('person.js render');
        if (false && Math.random() > 0.6) throw new Error('Went wrong')
        return (
            <React.Fragment>
                    {  this.context.isAuthenticated ? <p>Logout</p> : <p> Login</p> }
               {/* <AuthContext.Consumer>
                    {(context) =>  context.isAuthenticated ? <p>Logout</p> : <p> Login</p>

                    }
                </AuthContext.Consumer>*/}

                <p onClick={this.props.onClick}> Hi I am {this.props.name} and I am {this.props.age} </p>
                <input
                    //ref={(e) => this.inputEl = e}
                    ref={this.inputElRef}
                    type="text" onChange={this.props.changed} value={this.props.name}/>
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

Person.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withCClass(Person, classes.Person);