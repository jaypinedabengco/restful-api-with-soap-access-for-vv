var config = require('./../../config');
var connection = require('./connector.soap');

///

exports.getDocumentsByVerificationId = getDocumentsByVerificationId;

///


/**
 * 
 * @param {*} verification_id 
 */
function getDocumentsByVerificationId(verification_id){
    return connection
    .getClient()
    .then(client => {

    //     <param>
    //     <name></name>
    //     <value></value>
    //  </param>
    //  <param>
    //     <name>getRawOcrData</name>
    //     <value>true</value>
    //  </param>
    //  <param>
    //     <name>getImageData</name>
    //     <value>true</value>
    //  </param>

        let input_parameters = {
            accountId : config.vv_docs.account_id, 
            password: config.vv_docs.password,
            verificationId: verification_id, 
            param: [{
                name: 'getConfirmedOcrData', 
                value: 'false'
            }, 
            {
                name: 'getRawOcrData', 
                value: 'false'
            }, 
            {
                name: 'getImageData', 
                value: 'true'
            }]
        };

        return client.getInfoForAllDocumentsAsync(input_parameters);
    });
}