var sigmanautApp = angular.module('SigmanautApp', []);

sigmanautApp.controller('SigmanautController', function(){
  console.log('Sigmanaut controller loaded');

  var self = this; // holds the value of this

  self.people = [
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "fullName": "Luke Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    }
  ];

  self.newPerson = {};

  self.createPerson = function(){
    console.log(self.newPerson);
    self.newPerson.fullName = self.newPerson.firstName + ' ' + self.newPerson.lastName;
    self.people.push(angular.copy(self.newPerson));
  };

});
