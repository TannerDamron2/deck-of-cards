$(document).ready(function() {
  $("button#deck").click(function(event) {

        var suits = ["clubs", "hearts", "spades", "diamonds"];
        var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

        suits.forEach(function(suit){
          numbers.forEach(function(number){
            $("#allCards").append("<li>" + number + "of" + suit + "</li>");
          });
        });

    event.preventDefault();
  });
});
