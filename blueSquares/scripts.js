$( document ).ready(function() {

  //generate 12 red squares in the container div
    for (let i = 0; i < 12; i++) {
      $('#container').append('<div id="square" class="red"></div>');
    };
    
  //when element with class 'red' clicked: toggle class 'blue'
    $('.red').on('click', (event) => {
      $(event.target).toggleClass('blue');
    });

});
