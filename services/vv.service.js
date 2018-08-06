var config = require('./../config');
var vv_test_soap = require('./../soaps/vv/vv.test.soap');
var vv_documents_soap = require('./../soaps/vv_docs/vv_docs.documents.soap');

exports.test = test;
exports.getSourcesByVerificationId = getSourcesByVerificationId;
exports.getVerificationResult = getVerificationResult;
exports.testUpdateUser = testUpdateUser;
exports.getDocumentsByVerificationId = getDocumentsByVerificationId;

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

/**
 * 
 * @param {*} verification_id 
 */
function testUpdateUser(verification_id){
    return new Promise((resolve, reject) => {
        return vv_test_soap
            .getVerificationResult(verification_id)
                .then(result => {
                    // do update here
                    let verification_details = result[0].return;
                    return verification_details;
                })
                .then(verification_details => {
                    // build update body
                    let update_body = {
                        name : {}
                    };
                    update_body.email = 'bla123h@yopmail.com';
                    update_body.name.middleNames = 'hello';
                    let rule_id = verification_details.verificationResult.ruleId;

                    //remove date created
                    delete update_body.dateCreated;
                    
                    return vv_test_soap.updateVerification(verification_id, rule_id, update_body);
                })
            .then(resolve)
            .catch(reject);
    });
}

/**
 * 
 * @param {*} verification_id 
 */
function getDocumentsByVerificationId(verification_id){
    return vv_documents_soap
        .getDocumentsByVerificationId(verification_id)
        .then(result => {
            console.log('documents', result);
            return result;
        });
}