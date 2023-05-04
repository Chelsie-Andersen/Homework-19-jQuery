
$(document).ready(function(){
  $("Cats").on('mouseover',function(){
    $(this).parent("CatPic").addClass('overlay');
  });
});

$("Cats").on('mousleave',function(){
  $(this).hide();
});



