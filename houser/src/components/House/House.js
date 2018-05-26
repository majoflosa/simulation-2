import React from 'react';
// import {Link} from 'react-router-dom';
import deleteButton from '../../delete_button.png';

function House(props) {
    return (
        <div className="house-wrap">
            <p>Name: {props.house.name}</p>
            <p>Address: {props.house.address}</p>
            <p>City: {props.house.city}</p>
            <p>State: {props.house.state}</p>
            <p>Zip: {props.house.zip}</p>
            <p>Image: {props.house.image}</p>
            <p>Mortgage: {props.house.mortgage}</p>
            <p>Rent: {props.house.rent}</p>

            {/* <Link to={ '/' + props.house.id }> */}
                <button 
                    onClick={ () => props.deleteHouse(props.house.id)} 
                    className="delete-house">
                        <img src={deleteButton} alt="Delete house" />
                </button>
            {/* </Link> */}
        </div>
    );
}

export default House;