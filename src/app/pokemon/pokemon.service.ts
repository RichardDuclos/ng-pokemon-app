import {Injectable} from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";
import {find} from "rxjs";

@Injectable()
export class PokemonService {

    constructor() {
    }

    getPokemonList(): Pokemon[] {
        return POKEMONS;
    }

    getPokemonById(pokemonId: Number): Pokemon | undefined {
        return POKEMONS.find(pokemon => pokemon.id == pokemonId)
    }

    getPokemonTypeList(): string[] {
        return [
            'Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Electrik',
            'Poison',
            'Fée',
            'Vol',
            'Combat',
            'Psy',
            'Dragon',
            'Glace'
        ];
    }
}
