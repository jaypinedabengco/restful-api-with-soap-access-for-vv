var express = require('express');
var router = express.Router();
var vv_service = require('./../services/vv.service');

///

router.get('/test', test);
router.get('/get-sources-by-verification-id/:verification_id', getSourcesByVerificationId);
router.get('/get-verification-result/:verification_id', getVerificationResult);
router.get('/test-update-user/:verification_id', testUpdateUser);
router.get('/get-documents-by-verification-id/:verification_id', getDocumentsByVerificationId);

///

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function test(req, res, next) {
    return vv_service.test()
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getSourcesByVerificationId(req, res, next) {
    return vv_service.getSourcesByVerificationId(req.params.verification_id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getVerificationResult(req, res, next){
    return vv_service.getVerificationResult(req.params.verification_id)
        .then(result => {
            console.log(result);
            return res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function testUpdateUser(req, res, next){
    return vv_service.testUpdateUser(req.params.verification_id)
        .then(result => {
            console.log(result);
            return res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getDocumentsByVerificationId(req, res, next){
    return vv_service
            .getDocumentsByVerificationId(req.params.verification_id)
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
}

module.exports = router;
