$(function() {
  $(".clickable").click(function() {
    $(".initially-showing",this).toggle();
    $(".initially-hidden",this).toggle();
  });
});
