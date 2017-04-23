
// provide a key in config
var secretKey="secretKey",
	jsonwebtoken=require('jsonwebtoken');


// one middleware for all type of deveices 

module.exports=function(req, res, next) {

		if(req.device.type=="mobile" || req.device.type=="tablet"){
		var token = req.headers['x-access-token'];

		if(token) {

			jsonwebtoken.verify(token, secretKey, function(err, decoded) {

				if(err) {
					res.status(403).send({ success: false, message: "Failed to authenticate user"});

				} else {
					//
					req.decoded = decoded;
					next();
				}
			});
		} else {
			res.status(403).send({ success: false, message: "No Token Provided"});
		}
	}

	// for computer 
}