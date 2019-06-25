// pokemon-service.js
import $ from 'jquery';

const POKEMON_API =
  'https://pokemon-json.herokuapp.com/api/pokemons/';

export function getPokemonData(pokemonId) {
  $.ajax(`${POKEMON_API}${pokemonId}`, {
    onSuccess: pokemon => {
      $('.pokemon-containers').html(`<div>${pokemon.name}</div>`);
    }
  });
}

// pokemon-service.spec.js
jest.mock('jquery', () => {
  const jQuery = jest.fn(selector => ({
    html: jest.fn()
  }));

  jQuery.ajax = jest.fn((url, options) => {
    setTimeout(() => {
      options.onSuccess({ name: 'Bulbarsaur' });
    }, 0);
  });

  return jQuery;
});

import $ from 'jquery';
import { getPokemonData } from './pokemon-service';

describe('getPokemonData', () => {
  it('calls jquery correctly when ajax success', () => {
    getPokemonData(1);

    // force run setTimeout callback in our mock
    jest.runAllTimers();

    expect($.ajax).toHaveBeenCalledTimes(1);
    expect($).toHaveBeenCalledTimes(1);
    expect($).toHaveBeenCalledWith('.pokemon-containers');
  });
});
