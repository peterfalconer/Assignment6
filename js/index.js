$(document).ready(function () {

  var cities = ["NEWYORK", "NEW YORK CITY", "NY", "NYC", "SAN FRANCISCO", "SF", "BAY AREA", "LOS ANGELES", "LA", "LAX", "SYDNEY", "SYD", "AUSTIN", "ATX"];
  var images = ["nyc.jpg", "nyc.jpg", "nyc.jpg", "nyc.jpg", "sf.jpg", "sf.jpg", "sf.jpg", "la.jpg", "la.jpg", "la.jpg", "sydney.jpg", "sydney.jpg", "austin.jpg", "austin.jpg"];
  var selections = ["NYC", "SF", "LA", "ATX", "SYD"];
  // The following variables are used for the alternative method - using addClass and removeClass function. To use, initialise the useClassMethod var to true
  var useClassMethod = false;
  var classes = ["nyc", "nyc", "nyc", "nyc", "sf", "sf", "sf", "la", "la", "la", "sydney", "sydney", "austin", "austin"];
  var currentClass = "";
  var i = 0;

  function fillSelector() {
    for (i = selections.length - 1; i >= 0; i--) {
      $("#city-type").append("<option>" + selections[i] + "</option>");
    }
  }

  function citynameIsValid(cityName) {
    var result = false;
    if (cities.indexOf(cityName.toUpperCase().replace(/ /g, "")) > -1) {
      result = true;
    }
    return result;
  }

  function showCityAsBackground(cityName) {
    var j = 0;
    var bgURL = "";

    j = cities.indexOf(cityName.toUpperCase().replace(/ /g, ""));
    if (useClassMethod) {
      // Alternative method - using addClass and removeClass
      if (currentClass !== "") {
        $("body").removeClass(currentClass);
      }
      currentClass =  classes[j];
      $("body").addClass(currentClass);
    } else {
      bgURL = "url(images/" + images[j] + ")";
      $("body").css("background-image", bgURL);
    }
  }

  function showDefaultCityBackground() {
    $("body").css("background-image", "url(images/citipix_skyline.jpg)");
  }

  function UpdateCityImage(e) {
    var cityName = "";
    e.preventDefault();
    cityName = $("#city-type").val();
    if (citynameIsValid(cityName)) {
      showCityAsBackground(cityName);
    } else {
      showDefaultCityBackground(cityName);
    }
  }

  $("#city-type").on('change', UpdateCityImage);
  fillSelector();
});