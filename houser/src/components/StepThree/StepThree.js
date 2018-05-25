import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            image: '',
            mortgage: '',
            rent: ''
        };

        this.updateMortgageValue = this.updateMortgageValue.bind( this );
        this.updateRentValue = this.updateRentValue.bind( this );
        this.createHouse = this.createHouse.bind( this );
    }

    updateMortgageValue( e ) {
        this.setState({ mortgage: e.target.value });
    }

    updateRentValue( e ) {
        this.setState({ rent: e.target.value });
    }

    createHouse() {
        let { name, address, city, state, zip } = this.state;
        let reqBody = { name, address, city, state, zip };

        axios.post( 'http://localhost:3001/api/house', reqBody )
            .then( response => console.log( 'post successful on frontend' ) )
            .catch( err => console.log( 'post failed on frontend: ', err ) );
    }

    render() {
        return (
            <div className="wizard-body">
                <div className="form-wrap">
                    <p className="field-group">
                        <label htmlFor="prop-name">Monthly Mortgage Amount</label>
                        <input 
                            onChange={ (e) => this.updateMortgageValue(e)} 
                            type="text" id="prop-name" 
                            value={this.state.mortgage} 
                            className="long-input"
                        />
                    </p>
                    <p className="field-group">
                        <label htmlFor="address">Desired Monthly Rent</label>
                        <input 
                        onChange={ (e) => this.updateRentValue(e)} 
                        type="text" 
                        value={this.state.rent} 
                        className="long-input"    
                    />
                    </p>
                </div>

                <button onClick={ this.createHouse } id="complete-btn" className="btn green-btn">Complete</button>
            </div>
        );
    }
}

export default Wizard;