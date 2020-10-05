$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(() => {
    var url = location.href.replace(/\/$/, "");
   
    if (location.hash) {
        var hash = url.split("#");
      $('#tab a[href="#'+hash[1]+'"]').tab("show");
      url = location.href.replace(/\/#/, "#");
      history.replaceState(null, null, url);
      setTimeout(() => {
        $(window).scrollTop(0);
      }, 400);
    } 
     
    $('a[data-toggle="pill"]').on("click", function() {
      var newUrl;
      var hash = $(this).attr("href");
      if(hash == "#home") {
        newUrl = url.split("#")[0];
      } else {
        newUrl = url.split("#")[0] + hash;
      }
      history.replaceState(null, null, newUrl);
    });
  });