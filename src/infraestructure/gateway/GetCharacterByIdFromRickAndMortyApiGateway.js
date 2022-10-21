const { axios, config } = require('../configuration/Modules');
let Character = require('../../domain/model/Character');
const GetLocationByUrlFromRickAndMortyApiGateway = require('./GetLocationByUrlFromRickAndMortyApiGateway');

module.exports = class GetCharacterByIdFromRickAndMortyApiGateway{

    constructor() {}

    execute(characterId){
        return axios.get(config.get('configUrl.baseUrl') + config.get('configUrl.character') + characterId)
        .then(response => {
            return new Character(response.data.id, response.data.name, response.data.status, response.data.species, response.data.type, response.data.episode.length, response.data.location);
        })
        .catch(error => {
            return {"error" : error.message, "code" : error.code};
        });
        
    }

};