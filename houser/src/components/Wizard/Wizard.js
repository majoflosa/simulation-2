import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        };

        this.updateNameValue = this.updateNameValue.bind( this );
        this.updateAddressValue = this.updateAddressValue.bind( this );
        this.updateCityValue = this.updateCityValue.bind( this );
        this.updateStateValue = this.updateStateValue.bind( this );
        this.updateZipValue = this.updateZipValue.bind( this );
    }

    updateNameValue( e ) {
        this.setState({ name: e.target.value });
    }

    updateAddressValue( e ) {
        this.setState({ address: e.target.value });
    }

    updateCityValue( e ) {
        this.setState({ city: e.target.value });
    }

    updateStateValue( e ) {
        this.setState({ state: e.target.value });
    }

    updateZipValue( e ) {
        this.setState({ zip: e.target.value });
    }

    render() {
        // console.log( `name: ${this.state.name}, address: ${this.state.address}, city: ${this.state.city}, state: ${this.state.state}, zip: ${this.state.zip}` );
        return (
            <main className="wizard-wrap main-wrap">
                
                <div className="wizard-hdr">
                    <span className="wizard-title">Add New Listing</span>
                    <Link to="/"><button className="btn">Cancel</button></Link>
                </div>
                
                <div className="wizard-body">
                    <div className="form-wrap">
                        <p className="field-group">
                            <label htmlFor="prop-name">Property Name</label>
                            <input onChange={ (e) => this.updateNameValue(e)} type="text" id="prop-name" value={this.state.name} />
                        </p>
                        <p className="field-group">
                            <label htmlFor="address">Address</label>
                            <input onChange={ (e) => this.updateAddressValue(e)} type="text" id="address" value={this.state.address} />
                        </p>
                        <p className="field-group inline-group">
                            <label htmlFor="prop-name">City</label>
                            <input onChange={ (e) => this.updateCityValue(e)} type="text" id="city" value={this.state.city} />
                        </p>
                        <p className="field-group inline-group">
                            <label htmlFor="prop-name">State</label>
                            <input onChange={ (e) => this.updateStateValue(e)} type="text" id="state" value={this.state.state} />
                        </p>
                        <p className="field-group inline-group">
                            <label htmlFor="prop-name">Zip</label>
                            <input onChange={ (e) => this.updateZipValue(e)} type="number" id="zip" value={this.state.zip} />
                        </p>
                    </div>

                    <Link to="/"><button id="complete-btn" className="btn green-btn">Complete</button></Link>
                </div>

            </main>
        );
    }
}

export default Wizard;