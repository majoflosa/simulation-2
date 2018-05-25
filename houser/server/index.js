require( 'dotenv' ).config();
const express = require( 'express' ),
      {json} = require( 'body-parser' ),
      cors = require( 'cors' ),
      massive = require( 'massive' ),
      port = process.env.PORT || 3001;

const app = express();

massive( process.env.CONNECTION_STRING )
    .then( db => {
        app.set( 'db', db );
        console.log( 'Database connected successfully.' );
    } )
    .catch( err => console.log( 'Database connection failed: ', err ) );

app.use( json() );
app.use( cors() );

// endpoints here

app.listen( port, () => console.log( `Server listening on port ${port}.` ) );