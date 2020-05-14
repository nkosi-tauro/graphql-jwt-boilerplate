const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=> {
    // Look for auth field in headers
    const authHeaders = req.get("Authorization");
    if (!authHeaders){
        req.isAuth = false;
        return next();
    }
    const token = authHeaders.split(' ')[1];
    if (!token || token == ''){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, 'agent47coolsecret');
    }
    catch(err){
        req.isAuth = false;
        return next();
    }
    if (!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
   
}