const jsonWebToken = require('jsonwebtoken');

const auth = (req, res, next) => {
    // console.log(req.headers);

    const accessToken = req.headers['authorization'].replace('Bearer ', '');

    try{
    const jwt_payload = jsonWebToken.verify(accessToken, process.env.JWT_SECRET_KEY); // Verify token
    // console.log("JWT Payload:", jwt_payload);
    req.user = jwt_payload;
    } catch(err){
        return res.status(401).json({
            status: "failed",
            message: "Unauthorized"
        });
    }
 

    next();
}

module.exports = auth;