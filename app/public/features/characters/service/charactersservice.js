angular.module('app').service('CharactersService', function ($http, env) {
  this.getCharacterbyID = characterId => {
    const params = {
      apikey: 'c0cde22d951527540f68c755eae0f8ec&',
      hash: '5862d368b4a26a67382ecc31a0acaa7c',
      ts: 1
    };

    return $http.get(`${env.apiUrl}/characters/${characterId}`, { params });
  };

  this.getComicsbyCharacterID = (characterId, offset) => {
    const params = {
      apikey: 'c0cde22d951527540f68c755eae0f8ec&',
      hash: '5862d368b4a26a67382ecc31a0acaa7c',
      ts: 1,
      offset
    };

    return $http.get(`${env.apiUrl}/characters/${characterId}/comics`, { params });
  };

  this.getAllCharacters = (name, offset, limit) => {
    const params = {
      apikey: 'c0cde22d951527540f68c755eae0f8ec&',
      hash: '5862d368b4a26a67382ecc31a0acaa7c',
      ts: 1,
      offset,
      limit
    };

    if (name != null && name != '' && name != undefined) {
      params['nameStartsWith'] = name;
    }

    return $http.get(`${env.apiUrl}/characters`, { params });
  };
});
