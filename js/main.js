$(function() {
  // console.log("js connected");
  var height = $(window).height();
  console.log(height);
  $('body').height(`${height}`);

  setBoardsize();

  $(window).resize(() => {
    // alert('resize')
    resizeBoard();
  })

  setupGame();
})
