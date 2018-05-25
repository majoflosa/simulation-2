require( 'dotenv' ).config();
const express = require( 'express' ),
      {json} = require( 'body-parser' ),
      cors = require( 'cors' ),
      massive = require( 'massive' ),
      port = 3001;

const app = express();

massive( process.env.CONNECTION_STRING )
    .then( db => {
        app.set( 'db', db );
        console.log( 'Database connected successfully' );
    } )
    .catch( err => console.log( 'Database connection failed: ', err ) );

app.use( json() );
app.use( cors() );

// endpoints here
const { getHouses, createHouse, deleteHouse } = require( `${__dirname}/controller` );
app.get( '/api/houses', getHouses );
app.post( '/api/house', createHouse );
app.delete( '/api/house/:id', deleteHouse )

app.listen( port, () => console.log( `Server listening on port ${port}.` ) );