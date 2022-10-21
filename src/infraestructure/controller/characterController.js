const tokenVerify = require('../middleware/auth');
const GetCharacterById = require('../../domain/usecase/GetCharacterById');
const GetCharacterByIdFromRickAndMortyApiGateway = require('../gateway/GetCharacterByIdFromRickAndMortyApiGateway');
const GetLocationByUrlFromRickAndMortyApiGateway = require('../gateway/GetLocationByUrlFromRickAndMortyApiGateway');


const getCharacterById  = GetCharacterById(GetCharacterByIdFromRickAndMortyApiGateway, GetLocationByUrlFromRickAndMortyApiGateway);


exports.GetCharacterByIdController = (req, res, next) => {
    
    getCharacterById.execute(req.params.characterId)
    .then((response) => {
        res.json(response);
    }, (err) => {
        next(err);
    });
    
}
