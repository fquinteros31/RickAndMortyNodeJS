
module.exports = (GetCharacterByIdFromRickAndMortyApiGateway, GetLocationByUrlFromRickAndMortyApiGateway) => {

    async function execute(characterId){

        let character = await new GetCharacterByIdFromRickAndMortyApiGateway().execute(characterId);
        if(character.location.url){
            character.location = await new GetLocationByUrlFromRickAndMortyApiGateway().execute(character.location.url);
        }
        return character;
    }

    return {
        execute
    };

};