//var request = require('request');

module.exports = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit');
        next();
    },
    logger: function (req, res, next) {
        var timeStamp = new Date().toString();
        console.log('Request: ' + req.method + ' at ' + timeStamp + ' on ' + req.originalUrl);
        next();
    }
};

//module.exports = middleware;