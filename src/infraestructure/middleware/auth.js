const { config, jwt }  = require('../configuration/Modules');

let tokenVerify = (req, res, next) => {
    let token = req.get('Autorization');
    jwt.verify(token, config.get('configToken.SEED'),(err, decoded) => {
        if(err){
            return res.status(401).json({
                err
            });
        }
        req.usuario = decoded.usuario;
        next()
    });
}

module.exports = tokenVerify;