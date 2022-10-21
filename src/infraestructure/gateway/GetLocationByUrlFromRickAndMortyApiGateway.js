const { axios } = require('../configuration/Modules');
let Location = require('../../domain/model/Location');

module.exports = class GetLocationByUrlFromRickAndMortyApiGateway{

    constructor() {}

    execute(urlLocation){

        return axios.get(urlLocation)
        .then(response => {
            console.log(response.data.name);
            return new Location(response.data.name, response.data.url, response.data.type, response.data.dimension, response.data.residents);
        })
        .catch(error => {
            return {"error" : error.message, "code" : error.code};
        });
    }
};