$( document ).ready(function() {



$(".next").click(successivo);

function successivo(){
  var immagine = $(".container-slider img.active");
  var bull = $(".bullets span.active");

  immagine.removeClass("active");
  bull.removeClass("active");

  if (immagine.hasClass("last") && bull.hasClass("last")) {
    $("img.first").addClass("active");
    $("span.first").addClass("active")
  }
  else {
    immagine.next().addClass("active");
    bull.next().addClass("active");
  }
}


$(".prev").click(precedente);

function precedente(){
  var immagine = $(".container-slider img.active");
  var bull = $(".bullets span.active");


  immagine.removeClass("active");
  bull.removeClass("active");

  if (immagine.hasClass("first")) {
    $("img.last").addClass("active")
    $("span.last").addClass("active")
  }
  else {
    immagine.prev().addClass("active");
    bull.prev().addClass("active");
  }
}































});

//
