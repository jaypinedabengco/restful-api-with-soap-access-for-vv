var config = require('./../config');
var vv_test_soap = require('./../soaps/vv/vv.test.soap');

exports.test = test;
exports.getSourcesByVerificationId = getSourcesByVerificationId;
exports.getVerificationResult = getVerificationResult;

///

function test(){
    return new Promise((resolve, reject) => {
        return vv_test_soap
            .test()
            .then(resolve)
            .catch(reject);
    });
}

/**
 * 
 * @param {*} verification_id 
 */
function getSourcesByVerificationId(verification_id){
    return new Promise((resolve, reject) => {
        return vv_test_soap
            .getSourcesByVerificationId(verification_id)
            .then(resolve)
            .catch(reject);
    });
}

/**
 * 
 * @param {*} verification_id 
 */
function getVerificationResult(verification_id){
    return new Promise((resolve, reject) => {
        return vv_test_soap
            .getVerificationResult(verification_id)
            .then(resolve)
            .catch(reject);
    });
}