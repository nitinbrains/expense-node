
const jsonwebtoken = require("jsonwebtoken");
const jwtManager = (user) =>{

    const accessToken = jsonwebtoken.sign(
           { 
             id: user._id,
             name:user.name
             },
         process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
    });

    return accessToken;
}

module.exports = jwtManager;