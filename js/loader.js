$(window).on("load", function () {
  setTimeout(() => {
    $(".preloader").addClass("complete");
    setTimeout(() => {
      $(".main-head").addClass("fromleft");
      $("#tabak").addClass("fromright");
    }, 300);
  }, 1500);
});