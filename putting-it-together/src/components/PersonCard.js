import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <h5>Age: {this.state.clicks}</h5>
                <h5>Hair Color: {hairColor}</h5>
                <button onClick={this.IncrementItem}>Happy Birthday!</button>

            </div >
        );
    }
}

export default PersonCard;