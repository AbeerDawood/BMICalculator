$(document).ready(function(){
  
  // jQuery methods go here...
$(".btn-primary").click(function(){


//set the bmi calculations
  var w = $("#weight").val();
  var h = $("#height").val();
  var bmiResult = w/(h/100)**2;
  var bmiFixed = bmiResult.toFixed(2);
  
  
  //normal weight 
  var minWeight = 18.5 * ((h/100)**2);
  var minW = minWeight.toFixed(2);
  var maxweight = 24.9 * ((h/100)**2);
  var maxW = maxweight.toFixed(2);

  
  //conditions and images

if ( w === '' || h === '') {
  $(".result-images").remove();
  $(".bmi-result").empty();
  $('.warning-sign').empty()
  $('.warning-sign').append('**Please fill all required fields');
}

else if ( isNaN(w) || isNaN(h)) {
  $(".result-images").remove();
  $(".bmi-result").empty();
  $('.warning-sign').empty()
  $('.warning-sign').append('**Please insert a valide number');
}


else if (bmiFixed < 18.5) {
  $('.warning-sign').empty();
  $(".result-images").remove();
  $(".bmi-result").empty();
  $(".bmi-result").append("Your body mass index is " + bmiFixed + "<br>");
  $(".bmi-result").append("Your normal body weight: " + minW + " - " + maxW);
  var imgResult = $('<img class="result-images">');
  imgResult.attr("src", "imgs/underweight.jpg");
  $(".bmi-results").append(imgResult);
}
else if (bmiFixed >= 18.5 && bmiFixed <= 24.9) {
  $('.warning-sign').empty();
  $(".result-images").remove();
  $(".bmi-result").empty();
  $(".bmi-result").append("Your body mass index is " + bmiFixed + "<br>");
  $(".bmi-result").append("Good Job!");
  var imgResult = $('<img class="result-images">');
  imgResult.attr("src", "imgs/normal.jpg");
  $(".bmi-results").append(imgResult);

}
else if (bmiFixed >= 25 && bmiFixed <= 29.9) {
  $('.warning-sign').empty();
  $(".result-images").remove();
  $(".bmi-result").empty();
  $(".bmi-result").append("Your body mass index is " + bmiFixed + "<br>");
  $(".bmi-result").append("Your normal body weight: " + minW + " - " + maxW);

  var imgResult = $('<img class="result-images">');
  imgResult.attr("src", "imgs/overweight.jpg");
  $(".bmi-results").append(imgResult);

}
else if (bmiFixed >= 30 && bmiFixed <= 34.9) {
  $('.warning-sign').empty();
  $(".result-images").remove();
  $(".bmi-result").empty();
  $(".bmi-result").append("Your body mass index is " + bmiFixed + "<br>");
  $(".bmi-result").append("Your normal body weight: " + minW + " - " + maxW);
  var imgResult = $('<img class="result-images">');
  imgResult.attr("src", "imgs/obese.jpg");
  $(".bmi-results").append(imgResult);

}
else if (bmiFixed >= 35) {
  $('.warning-sign').empty();
  $(".result-images").remove();
  $(".bmi-result").empty();
  $(".bmi-result").append("Your body mass index is " + bmiFixed + "<br>");
  $(".bmi-result").append("Your normal body weight: " + minW + " - " + maxW);
  var imgResult = $('<img class="result-images">');
  imgResult.attr("src", "imgs/extremely-obese.jpg");
  $(".bmi-results").append(imgResult); 
}


});


//warning sign






});