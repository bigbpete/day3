class PokeServiceFileSystem {
    constructor() {
    }
    getPokemonById(pokemonId, callback) {
        callback(['Pokemon', pokemonId]);
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
let fileSystemPokeService = new PokeServiceFileSystem();
let pokedex = new Pokedex(fileSystemPokeService);

pokedex.addPokemonById(3); // => The information recieved from the pokeService (2) ['Pokemon', 3]