const axios = require('axios');
class PokeFetcher {
    constructor(offset, limit) {
        this.offset = offset || 0;
        this.limit = limit || 10
    }

    getListPokemon = async () => {
        const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?" 
        + "offset=" + this.offset + "&limit=" + this.limit);
        return resp.data;
    }
}

module.exports = PokeFetcher;