// pokemon-service.js
import $ from 'jquery';

export function getPokemonData() {
  $.ajax('https://pokemon-json.herokuapp.com/api/pokemons', {
    method: 'GET',
    onSuccess: pokemons => {
      $.each(pokemons, (_, pokemon) => {
        const html = `<div>${pokemon.name}</div>`;
        $('.pokemon-containers').append(html);
      });
    },
    onError: error => {
      const html = `<p>${error}</p>`;
      $('.error-msg-container').append(html);
    }
  });
}

// pokemon-service.spec.js
jest.mock('jquery', () => {
  const jQuery = jest.fn(selector => ({
    append: jest.fn()
  }));

  jQuery.ajax = jest.fn((url, options) => {
    setTimeout(() => {
      options.onSuccess([
        { name: 'Bulbarsaur' },
        { name: 'Charmander' }
      ]);
    }, 0);
  });

  jQuery.each = jest.fn((array, callback) => {
    array.forEach((item, index) => callback(index, item));
  });

  return jQuery;
});

import $ from 'jquery';
import { getPokemonData } from './pokemon-service';

describe('getPokemonData', () => {
  it('calls jquery correctly when ajax success', () => {
    getPokemonData();
    expect($.ajax).toHaveBeenCalledTimes(1);
    expect($.each).toHaveBeenCalledTimes(1);
    // because two pokemons are returned from ajax
    expect($).toHaveBeenCalledTimes(2);
    // asserting the selectors when appending pokemon
    expect($.mock.calls).toEqual([
      ['.pokemon-containers'],
      ['.pokemon-containers']
    ]);
  });
});
