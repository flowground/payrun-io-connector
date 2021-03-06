/**
 * Auto-generated action file for "PayRun.IO" API.
 *
 * Generated at: 2019-05-07T14:43:40.665Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / payrun-io-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PutPayCode'
 * Endpoint Path: '/Employer/{EmployerId}/PayCode/{PayCodeId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "EmployerId",
    "PayCodeId",
    "Authorization",
    "Api-Version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "EmployerId": "EmployerId",
    "PayCodeId": "PayCodeId",
    "Authorization": "Authorization",
    "Api_Version": "Api-Version",
    "Benefit": "Benefit",
    "Code": "Code",
    "Description": "Description",
    "EffectiveDate": "EffectiveDate",
    "Niable": "Niable",
    "_href": "@href",
    "_rel": "@rel",
    "_title": "@title",
    "NominalCode": "NominalCode",
    "NonArrestable": "NonArrestable",
    "Notional": "Notional",
    "Readonly": "Readonly",
    "Region": "Region",
    "Revision": "Revision",
    "Taxable": "Taxable",
    "Territory": "Territory",
    "Type": "Type",
    "PayCode": "PayCode",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'PutPayCode',
        pathName: '/Employer/{EmployerId}/PayCode/{PayCodeId}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}