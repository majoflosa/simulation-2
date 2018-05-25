import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    // constructor(){
    //     super();
    // }

    render() {
        return (
            <main className="dashboard-wrap main-wrap">
                
                <div className="dashboard-hdr">
                    <span className="dashboard-title">Dashboard</span>
                    <Link to="/wizard"><button className="btn">Add New Property</button></Link>
                </div>

                <div className="dashboard-body">
                    <h3>Home Listings</h3>
                </div>

            </main>
        );
    }
}

export default Dashboard;