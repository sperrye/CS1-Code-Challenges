$( document ).ready(function() {

  for(let i = 0; i < 12; i++) {
    $('#container').append('<div class="red"></div>');
  };

  $('.red').on('click', (event) => {
    $(event.target).toggleClass('blue');
  });
  
})
