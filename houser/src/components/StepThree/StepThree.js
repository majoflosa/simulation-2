import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateMortgage, updateRent, reset} from '../../ducks/reducer';

class StepThree extends Component {
    constructor(){
        super();

        // this.state = {
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: 0,
        //     image: '',
        //     mortgage: '',
        //     rent: ''
        // };

        // this.updateMortgageValue = this.updateMortgageValue.bind( this );
        // this.updateRentValue = this.updateRentValue.bind( this );
        this.createHouse = this.createHouse.bind( this );
    }

    // updateMortgageValue( e ) {
    //     this.setState({ mortgage: e.target.value });
    // }

    // updateRentValue( e ) {
    //     this.setState({ rent: e.target.value });
    // }

    createHouse() {
        let { name, address, city, state, zip, image, mortgage, rent, reset } = this.props;
        let reqBody = { name, address, city, state, zip, image, mortgage, rent };

        axios.post( 'http://localhost:3001/api/house', reqBody )
            .then( response => {
                console.log( 'post successful on frontend: ', response );
                reset();
            } )
            .catch( err => console.log( 'post failed on frontend: ', err ) );
    }

    render() {
        console.log( this.props );
        return (
            <div className="wizard-body">
                <div className="form-wrap">
                    <p className="field-group">
                        <label htmlFor="prop-name">Monthly Mortgage Amount</label>
                        <input 
                            onChange={ (e) => this.props.updateMortgage(e.target.value)} 
                            type="text" id="prop-name" 
                            value={this.props.mortgage} 
                            className="long-input"
                        />
                    </p>
                    <p className="field-group">
                        <label htmlFor="address">Desired Monthly Rent</label>
                        <input 
                            onChange={ (e) => this.props.updateRent(e.target.value)} 
                            type="text" 
                            value={this.props.rent} 
                            className="long-input"    
                        />
                    </p>
                </div>

                <Link to="/wizard/step2">
                    <button className="btn green-btn prev">Previous Step</button>
                </Link>
                <button onClick={ this.createHouse } id="complete-btn" className="btn green-btn">Complete</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name, 
        address: state.address,
        city: state.city,
        state: state.state, 
        zip: state.zip,
        image: state.image,
        mortgage: state.mortgage,
        rent: state.rent
    };
}

export default connect( mapStateToProps, {updateMortgage, updateRent, reset})(StepThree);