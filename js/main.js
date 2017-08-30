$(function() {
  // console.log("js connected");
  setBoardsize();

  $(window).resize(() => { resizePage(); })

  setupGame();
})
