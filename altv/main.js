$( document ).ready(function() {



$(".next").click(successivo);
$(".prev").click(precedente);


function successivo(){
  var immagine = $(".container-slider img.active");
  var bull = $(".bullets span.active");

  immagine.removeClass("active");
  bull.removeClass("active");

  if (immagine.hasClass("last")) {
      $("img.first").addClass("active");

    $("span.first").addClass("active");
  }
  else {
      immagine.next().addClass("active");
    bull.next().addClass("active");
  }
}





//animazione non funziona il fadeIn mi mette display block sovrascrivendo il mio css
// function successivo(){
//   var immagine = $(".container-slider img.active");
//   // var bull = $(".bullets span.active");
//
//   immagine.removeClass("active");
//   // bull.removeClass("active");
//
//   if (immagine.hasClass("last")) {
//     $("img.first").fadeIn("fast", function() {
//       $("img.first").addClass("active");
//     });
//
//     // $("span.first").addClass("active");
//   }
//   else {
//     $(immagine.next()).fadeIn("slow", function() {
//       immagine.next().addClass("active");
//     });
//
//     // bull.next().addClass("active");
//   }
// }














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
