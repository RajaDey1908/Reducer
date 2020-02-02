import React, { Component } from 'react';

class CustomInput extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <input type="text"  onChange={this.props.onChanged} />
            </>
        )
    }
}

export default CustomInput