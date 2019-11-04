// Business Logic------------
function VacationPlaces () {
  this.destinations = []
}
function Destinations (location, landmarks, season) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
}

Destinations.prototype.total = function() {
  return this.location + this.landmarks + this.season;
}

var lincolnCity = new Destinations ("Oregon Coast, ", ["Devil's Lake", " D river beach, "], "Summer");
var seattle = new Destinations ("On the bay in Washington, ", ["Space Needle", "Experience Music Project"], " Fall");
var paris = new Destinations ("France ", ["The Louvre", " The Seine river "], "Winter");

// User Interface Logic ---------
$(document).ready(function(){
  $(".places").on("click" , function(event) {
    this.classList.toggle("lincolnCity")
  event.preventDefault();

$(".lincolnCity").text(lincolnCity.total());
$(".seattle").text(seattle.total());
$(".paris").text(paris.total());

})
});
