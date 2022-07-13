angular.module('app').component('listCharacterItem', {
  bindings: {
    character: '<',
    seeDetails: '&'
  },
  templateUrl: 'public/features/characters/components/list-character-item/list.Characters.html',
  controller: function () {},
  controllerAs: 'ctrl'
});
