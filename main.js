$( document ).ready(function() {



$(".next").click(successivo);

function successivo(){
  var immagine = $(".container-slider img.active");

  immagine.removeClass("active");

  if (immagine.hasClass("last")) {
    $("img.first").addClass("active")
  }
  else {
    immagine.next().addClass("active");
  }
}


$(".prev").click(precedente);

function precedente(){
  var immagine = $(".container-slider img.active");

  immagine.removeClass("active");

  if (immagine.hasClass("first")) {
    $("img.last").addClass("active")
  }
  else {
    immagine.prev().addClass("active");
  }
}































});

//
