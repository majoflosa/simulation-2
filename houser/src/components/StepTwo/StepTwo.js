import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
// import reducer from '../../ducks/reducer'; 
import { updateImage } from '../../ducks/reducer'; 

class StepTwo extends Component {
    // constructor(){
        // super();

        // this.state = {
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: 0,
        //     image: ''
        // };

        // this.updateImageValue = this.updateImageValue.bind( this );
    // }

    // updateImageValue( e ) {
    //     this.setState({ image: e.target.value });
    // }

    render() {
        console.log( this.props );
        return (
            <div className="wizard-body">
                <div className="form-wrap">
                    <p className="field-group">
                        <label htmlFor="image">Image URL</label>
                        <input 
                            onChange={ (e) => this.props.updateImage(e.target.value)}
                            type="text" id="image"
                            value={this.props.image} 
                            className="long-input"    
                        />
                    </p>
                </div>

                <Link to="/wizard/step1">
                    <button className="btn green-btn prev">Previous Step</button>
                </Link>
                <Link to="/wizard/step3">
                    <button className="btn green-btn next">Next Step</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // name: state.name, 
        // address: state.address,
        // city: state.city,
        // state: state.state, 
        // zip: state.zip,
        image: state.image
    }
}

export default connect(mapStateToProps, {updateImage})(StepTwo);