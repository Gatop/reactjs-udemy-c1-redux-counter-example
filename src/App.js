import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/index';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    // Conectar a actions para increment
    onIncrement(e){
        console.log("Incrementar en View");
        this.props.onIncrement();
    }

    // Conectar a actions para decrement
    onDecrement(e){
        console.log("Decrementar en View");
        this.props.onDecrement();
    }

    render() {
        return (
            <div className="App">
                <h2>Contador</h2>
                <label>{ this.props.counter }</label><br/><br/>
                <button onClick={this.onIncrement}>Sumar</button>
                <button onClick={this.onDecrement}>Restar</button>
            </div>
        );
    }
}

// mapStateToProps
// mapDispatchToProps

// encargado de consultar las propiedades. No se puede modificar desde la vista
const mapStateToProps = (value) => {
    return {
        counter: value
    }
}

// encargado de lanzar los Dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

// conectar nuestra app al store
export default connect(mapStateToProps, mapDispatchToProps)(App);
