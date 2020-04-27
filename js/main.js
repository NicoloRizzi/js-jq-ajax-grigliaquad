$(document).ready(function () {
  /**
   * Descrizione:
Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
DevTools console e network sono nostri amici
   */

  //ref
  var myApi = "https://flynn.boolean.careers/exercises/api/random/int";
  var boxes = $(".cell");
  boxes.click(function () {
    var self = $(this);
    console.log(self);
    
    $.ajax({
      type: "GET",
      url: myApi,
      success: function (data) {
        $('#random-number').text(data.response);
      },
      error: function (data) {
        alert('ERROR', 'Si è verificato un errore');

      }
    });
  });

}); // END DOC READY
