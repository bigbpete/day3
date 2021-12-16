class PokeServiceFileSystem {
    constructor() {
    }
    getPokemonById(pokemonId, callback) {
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
            console.log("The information recieved from the pokeService", pokemonData);
        });
    }

}
let realPokeService = new PokeService();
let fileSystemPokeService = new PokeServiceFileSystem();
let pokedex = new Pokedex(realPokeService);

pokedex.addPokemonById(3);