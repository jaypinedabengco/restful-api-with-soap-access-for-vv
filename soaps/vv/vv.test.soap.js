var config = require('./../../config');
var connection = require('./connector.soap');

exports.test = test;
exports.getSourcesByVerificationId = getSourcesByVerificationId;
exports.getVerificationResult = getVerificationResult;
exports.updateVerification = updateVerification;

///

/**
 * Do initial
 */
function test(){
    return connection
        .getClient()
        .then(client => {
            console.log(client);
            // let input_parameters = {
            //     accountId : config.vv.account_id, 
            //     password: config.vv.password,
            //     ruleId: 'default',
            //     name: {
            //         givenName : 'blah blah', 
            //         surname: '123'
            //     }, 
            //     currentResidentialAddress: {
            //         country: 'PH', 
            //         postcode: 2009
            //     }
            // };

            // return client.registerVerificationAsync(input_parameters);
            return "";
        });
}

/**
 * 
 * @param {*} verification_id 
 */
function getSourcesByVerificationId(verification_id){
    return connection
    .getClient()
    .then(client => {
        let input_parameters = {
            accountId : config.vv.account_id, 
            password: config.vv.password,
            verificationId: verification_id
        };

        return client.getSourcesAsync(input_parameters);
    });
}

/**
 * 
 * @param {*} verification_id 
 */
function getVerificationResult(verification_id){
    return connection
    .getClient()
    .then(client => {
        let input_parameters = {
            accountId : config.vv.account_id, 
            password: config.vv.password,
            verificationId: verification_id
        };
        return client.getVerificationResultAsync(input_parameters);
    });
}

/**
 * 
 * @param {*} verification_id 
 * @param {*} data 
 */
function updateVerification(verification_id, rule_id, data){
    return connection
    .getClient()
    .then(client => {

        // add accountId & password
        data.accountId = config.vv.account_id;
        data.password = config.vv.password;
        data.verificationId = verification_id;        
        data.ruleId = rule_id;

        return client.registerVerificationAsync(data);
    });
}