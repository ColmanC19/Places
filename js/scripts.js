// Business Logic------------
function VacationPlaces () {
  this.destinations = []
}
function Destinations (location, landmarks, season) {
  this.location = location,
  this.landmarks = landmarks,
  this.season = season
}

Destinations.prototype.total = function() {
  return this.location + this.landmarks + this.season;
}

var lincolnCity = new Destinations ("Oregon Coast", ["Devil's Lake", "D river beach"], "Summer");
var Seattle = new Destinations ("On the bay in Washington", ["Space Needle", "Experience Music Project"], "Fall");
var Paris = new Destinations ("France", ["The Louvre", "The Seine river"], "Winter");

// User Interface Logic ---------
$(document).ready(function(){
  $("#places").click(function(event) {
  event.preventDefault()

// ("#lincolnCity")(lincolnCity.total).text();
})
});
