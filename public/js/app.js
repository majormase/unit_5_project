const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.indexOfEditFormToShow = null;

  this.createUser = function(){
    $http({
      method: 'POST',
      url: '/users',
      data: {
        createUsername: this.createUsername,
        createPassword: this.createPassword
      }
    }).then(function(response){
      console.log(response);
      // console.log(controller.data.username);
      controller.createUsername = null;
      controller.createPassword = null;
    }, function(error){
      console.log(error);
    });
  }
  //
  this.logIn = function(){
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
        console.log(response);
        controller.loggedInUsername = response.data.username;
        // controller.goApp();
        // console.log(controller.data.username);
        controller.username = null;
        controller.password = null;
    }, function(error){
        console.log(error);
    });
  }
  //
  this.logOut = function(){
    $http({
        method:'DELETE',
        url:'/sessions'
    }).then(function(response){
        console.log(response);
        controller.loggedInUsername = null;
    }, function(error){
        console.log(error);
    });
  }

  // =====================
  //      Sounds
  // =====================
  // Add Post
  this.addSound = function(){
    $http({
      method: 'POST',
      url: '/sounds',
      data: {
        name: this.name,
        description: this.description,
        image: this.image,
        comment: this.comment
      }
    }).then(function(response){
      controller.getSounds();
      controller.name = null;
      controller.description = null;
      controller.image = null;
      controller.comment = null;
      // console.log(response);
    }, function(error){
      console.log(error);
    });
  };
  // Get Posts
  this.getSounds = function(){
    $http({
      method: 'GET',
      url: '/sounds',
    }).then(function(response){
      controller.sounds = response.data;
    }, function(error){
      console.log(error);
    });
  };
  // Delete Sound
  this.deleteSound = function(sound){
    $http({
      method: 'DELETE',
      url: '/sounds/' + sound._id
    }).then(function(response){
       controller.getSounds();
    }, function(error){
      // console.log(error);
    });
  };
  // Update City
  this.editSound = function(sound){
    $http({
      method: 'PUT',
      url: '/sounds/' + sound._id,
      data: {
        name: this.updatedSoundName,
        description: this.updatedSoundDescription,
        image: this.updatedSoundImage,
        comment: this.updatedSoundComment
      }
    }).then(function(response){
      controller.getSounds();
      controller.indexOfEditFormToShow = null;
    });
  };

  this.getSounds();
  }]);

$(() => {

  const $openButton = $('.openModal');
  const $modal = $('#modal');
  const $close = $('#close');

  const openModal = () => {
    $modal.css('display', 'block');
  };

  const closeModal = () => {
    $modal.css('display', 'none');
  };

  $openButton.on('click', openModal)
  $close.on('click', closeModal)
  // setTimeout(openModal, 2000);

})
