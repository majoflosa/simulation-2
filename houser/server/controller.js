let dbid = 14;

const getHouses = (req, res, next) => {
    req.app.get( 'db' )
        .getHousesQuery()
        .then( response => {
            console.log( 'getHouses successful on server: ', response );
            return res.status(200).json(response);
        })
        .catch( err => {
            console.log( 'getHouses failed on server: ', err );
            return res.status(500).json(err);
        } );
}

const createHouse = (req, res, next) => {
    const { name, address, city, state, zip, image, mortgage, rent } = req.body;
    req.app.get( 'db' )
        .createHouseQuery( [dbid, name, address, city, state, zip, image, mortgage, rent] )
        .then( response => {
            dbid++;
            console.log( 'createHouse successful');
            // let redirect = res.redirect;
            // return res.status(200).json( redirect );
            // res.redirect('http://localhost:3000/');
        })
        .catch( err => {
            console.log( err );
            return res.status(500).json(err);
        } );
}

const deleteHouse = (req, res, next) => {
    req.app.get( 'db' )
        .deleteHouseQuery( req.params.id )
        .then( response => {
            console.log( 'deleteHouse successful' );
            return res.status(200).json( response );
        })
        .catch( err => {
            console.log( 'deleteHouse failed' );
            return res.status(500).json( response );
        });
}

module.exports = {
    getHouses,
    createHouse,
    deleteHouse
}