import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
// import axios from 'axios';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

class Wizard extends Component {
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
        return (
            <main className="wizard-wrap main-wrap">
                
                <div className="wizard-hdr">
                    <span className="wizard-title">Add New Listing</span>

                    {/* TO DO:
                        * Cancel button should reset state
                    */}
                    <Link to="/"><button className="btn">Cancel</button></Link>
                </div>

                <Switch>
                    <Route path="/wizard/step1" component={StepOne} />
                    <Route path="/wizard/step2" component={StepTwo} />
                    <Route path="/wizard/step3" component={StepThree} />
                </Switch>

            </main>
        );
    }
}

export default Wizard;