$(function() {
  // console.log("js connected");
  var height = $(window).height();
  console.log(height);
  $('body').height(`${height}`);

  setupGame();
  // gameLoop();
})
