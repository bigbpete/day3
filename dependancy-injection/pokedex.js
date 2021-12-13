class PokeServiceOnFileSystem {
    constructor() {

    }
    getPokemonById(pokemonId, callback ) {
        callback(['Pokemon', pokemonId]);
    }
}

class PokeService {
    constructor() {

    }
    getPokemonById(pokemonId, callback) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(response => response.json())
            .then(pokemon => callback(pokemon))
    }
}

class Pokedex {
    constructor(pokeService) {
        this.pokeService = pokeService;
    }

    addPokemonById(pokemonId) {
        this.pokeService.getPokemonById(pokemonId, function(pokemonData) {
            console.log("the information recieved from the pokeService", pokemonData);
        });
    }
}
let realPokeservice = new PokeService();
let fileSystemPokeService = new PokeServiceOnFileSystem;
let pokedex = new Pokedex(realPokeservice);

pokedex.addPokemonById(3);
