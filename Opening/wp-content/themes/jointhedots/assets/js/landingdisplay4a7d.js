function showLanding(){

  var barba = document.querySelector('.barba-container');

  if(barba.dataset.namespace == 'home-page'){
    window.location = '/joined-force/';
  }

}

showLanding();
