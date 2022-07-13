angular
  .module('app')
  .controller('CharacterDetailsController', [
    'CharactersService',
    '$stateParams',
    CharacterDetailsController
  ]);

function CharacterDetailsController(charactersService, $stateParams) {
  const vm = this;
  vm.characterId = $stateParams.characterId;
  vm.characterComics = [];
  vm.characterDetail = {};
  vm.offset = 0;
  vm.totalComicItems = 0;
  console.log('CharacterDetailsController', vm.characterId);

  vm.characterDetail = charactersService
    .getCharacterbyID(vm.characterId)
    .then(response => (vm.characterDetail = response.data.data.results[0]))
    .catch(error => {
      console.log(error);
    });

  vm.characterComics = charactersService
    .getComicsbyCharacterID(vm.characterId, vm.offset)
    .then(response => {
      vm.characterComics = [...vm.characterComics, ...response.data.data.results];
      vm.totalComicItems = response.data.data.total;
    })
    .catch(error => {
      console.log(error);
    });

  vm.seeMore = () => {
    vm.offset += 20;
    charactersService
      .getComicsbyCharacterID(vm.characterId, vm.offset)
      .then(response => {
        vm.characterComics = [...vm.characterComics, ...response.data.data.results];
        vm.totalComicItems = response.data.data.total;
      })
      .catch(error => {
        console.log(error);
      });
  };
}
