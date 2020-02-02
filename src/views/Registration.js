import React, { Component } from 'react';
import Button from '../components/Button'
import CustomInput from '../components/CustomInput';
import { connect } from 'react-redux';
import * as actionType from '../../src/store/action'

class Registration extends Component {
    constructor(props) {
        super(props);
        // this.state = { counter: '' };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    //     console.log("sfd")
    //     this.setState({ counter: event.target.value });
    // }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        return (
            <>
                {/* <CustomInput value={this.state.counter} onChanged={this.props.onShowValue} /> */}
                <label>INCREMENT</label>
                <CustomInput onChanged={this.props.onIncrementCounter} />
                <div>{this.props.incrementedValue}</div>
                <label>DECREMENT</label>
                <CustomInput onChanged={this.props.onDecrementCounter} />
                <div>{this.props.decrementedValue}</div>
                {/* <Button clicked={this.handleSubmit} /> */}
                {/* <Button /> */}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        incrementedValue: state.inc.counter,
        decrementedValue: state.dec.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionType.INCREMENT, value: 5
        }),
        onDecrementCounter: () => dispatch({
            type: actionType.DECREMENT, value: 5
        }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)