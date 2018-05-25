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
            image: ''
        };

        this.updateImageValue = this.updateImageValue.bind( this );
    }

    updateImageValue( e ) {
        this.setState({ image: e.target.value });
    }

    render() {
        return (
            <div className="wizard-body">
                <div className="form-wrap">
                    <p className="field-group">
                        <label htmlFor="prop-name">Image URL</label>
                        <input 
                            onChange={ (e) => this.updateImageValue(e)}
                            type="text" id="prop-name"
                            value={this.state.image} 
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