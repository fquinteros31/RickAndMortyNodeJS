const { config, jwt }  = require('../configuration/Modules');

exports.login = (req, res) => {
    
    if(req.body.email === "fquinteros@gmail.com" && req.body.password === "123456"){
        const jwToken = jwt.sign({
            user: {email : req.body.email}
        }, config.get('configToken.SEED'), {expiresIn: config.get('configToken.expiration')});
        res.json({
            user: {
                email: req.body.email
            },
            jwToken
        });

    }else{
        res.status(400).json({
            error: 'ok',
            msj : "invalid user or password"
        })
    }
}
