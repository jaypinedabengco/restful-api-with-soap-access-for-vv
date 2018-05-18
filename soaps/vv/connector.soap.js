var config = require('./../../config');
var soap = require('soap');
var CLIENT = null;

/**
 * 
 */
function createClient(){
    return soap.createClientAsync(config.vv.wsdl)
        .then(client => {
            // add client to global
            CLIENT = client;
            return client;
        });
}

/**
 * 
 */
function getClient(){
    return new Promise((resolve, reject) => {
        if ( !CLIENT ){ //no client
            // create one first
            return createClient()
                .then(resolve) // then return client
                .catch(reject); // or if has error, then throw that also
        }

        // if already has one, then  
        // test first???
        return resolve(CLIENT);
    });

}


// Public

exports.getClient = getClient;