const axios = require('axios');
class PokeFetcher {
    constructor(limit, page) {
        this.offset = limit * (page-1) || 0;
        this.limit = limit || 10;
        // this.page = page;
    }

    getListPokemon = async () => {
        const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?" 
        + "offset=" + this.offset + "&limit=" + this.limit);
        return resp.data;
    }

    // getListPokemonByUrl = async (url) => {
    //     const resp = await axios.get(url);
    //     return resp.data;
    // }
}

module.exports = PokeFetcher;