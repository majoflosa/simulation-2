import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import reducer from '../../ducks/reducer';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';

class StepOne extends Component {
    constructor(){
        super();

        // this.state = {
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: 0
        // };

        // this.updateNameValue = this.updateNameValue.bind( this );
        // this.updateAddressValue = this.updateAddressValue.bind( this );
        // this.updateCityValue = this.updateCityValue.bind( this );
        // this.updateStateValue = this.updateStateValue.bind( this );
        // this.updateZipValue = this.updateZipValue.bind( this );
        // this.createHouse = this.createHouse.bind( this );
    }

    // updateNameValue( e ) {
    //     this.setState({ name: e.target.value });
    // }

    // updateAddressValue( e ) {
    //     this.setState({ address: e.target.value });
    // }

    // updateCityValue( e ) {
    //     this.setState({ city: e.target.value });
    // }

    // updateStateValue( e ) {
    //     this.setState({ state: e.target.value });
    // }

    // updateZipValue( e ) {
    //     this.setState({ zip: e.target.value });
    // }

    // createHouse() {
    //     let { name, address, city, state, zip } = this.state;
    //     let reqBody = { name, address, city, state, zip };

    //     axios.post( 'http://localhost:3001/api/house', reqBody )
    //         .then( response => console.log( 'post successful on frontend' ) )
    //         .catch( err => console.log( 'post failed on frontend: ', err ) );
    // }

    render() {
        // console.log( 'stepone props: ', this.props );
        return (
            <div className="wizard-body">
                <div className="form-wrap">
                    <p className="field-group">
                        <label htmlFor="prop-name">Property Name</label>
                        <input onChange={ (e) => this.props.updateName(e.target.value)} type="text" id="prop-name" value={this.props.name} />
                    </p>
                    <p className="field-group">
                        <label htmlFor="address">Address</label>
                        <input onChange={ (e) => this.props.updateAddress(e.target.value)} type="text" id="address" value={this.props.address} />
                    </p>
                    <p className="field-group inline-group">
                        <label htmlFor="prop-name">City</label>
                        <input onChange={ (e) => this.props.updateCity(e.target.value)} type="text" id="city" value={this.props.city} />
                    </p>
                    <p className="field-group inline-group">
                        <label htmlFor="prop-name">State</label>
                        <input onChange={ (e) => this.props.updateState(e.target.value)} type="text" id="state" value={this.props.state} />
                    </p>
                    <p className="field-group inline-group">
                        <label htmlFor="prop-name">Zip</label>
                        <input onChange={ (e) => this.props.updateZip(e.target.value)} type="number" id="zip" value={this.props.zip} />
                    </p>
                </div>

                <Link to="/wizard/step2">
                    <button id="complete-btn" className="btn green-btn">Next Step</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        name: state.name, 
        address: state.address,
        city: state.city,
        state: state.state, 
        zip: state.zip
    }
}

// const { updateName, updateAddress, updateCity, updateState, updateZip } = reducer; 

export default connect( mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(StepOne);