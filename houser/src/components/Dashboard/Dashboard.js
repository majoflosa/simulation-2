import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        }

        this.getHouses = this.getHouses.bind( this );
        this.deleteHouse = this.deleteHouse.bind( this );
    }

    getHouses() {
        axios.get( 'http://localhost:3001/api/houses' )
            .then( response => {
                console.log( 'axios get response: ', response );
                this.setState({ houses: response.data })
            })
            .catch( err => console.log( 'getHouses failed on frontend: ', err ) );
    }

    deleteHouse( id ) {
        axios.delete( `http://localhost:3001/api/house/${id}` )
            .then( response => {
                console.log( 'deleteHouse successfull on frontend: ', response );
                this.getHouses();
            })
            .catch( err => {
                console.log( 'deleteHouse failed on frontend: ', err);
            });
    }

    componentDidMount() {
        this.getHouses();
        console.log( 'dashboard component mounted' );
    }

    render() {
        return (
            <main className="dashboard-wrap main-wrap">
                
                <div className="dashboard-hdr">
                    <span className="dashboard-title">Dashboard</span>
                    <Link to="/wizard/step1"><button className="btn">Add New Property</button></Link>
                </div>

                <div className="dashboard-body">
                    <h3>Home Listings</h3>
                    { this.state.houses.map( house => {
                        return <House key={house.id} house={house} deleteHouse={this.deleteHouse} />
                    }) }
                </div>

            </main>
        );
    }
}

export default Dashboard;