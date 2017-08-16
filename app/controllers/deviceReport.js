"use strict";
const DeviceReport = require('../models/deviceReport');

/*
 * getUsers retrieves all the users.
 * if no errors, send them back
 */
function getDeviceReports(req, res) {
    DeviceReport.find({})
    .exec((err, users) => {
        if(err){
            res.send(err);
        }  else {
            res.json(users);
        }
        
    });
}


//export all the functions
module.exports = { getUsers };