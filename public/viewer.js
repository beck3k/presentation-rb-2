var previous_slide = 0;
var allSlides = 0;
function changeSlide(slide){
  toggleSlide(previous_slide);
  toggleSlide(slide);
  previous_slide = slide;
}
function toggleSlide(slide){
  var x = document.getElementById('slide-' + slide);
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
function advanceSlide(){
  if(previous_slide + 1 != allSlides){
    changeSlide(previous_slide + 1);
    if($('#previousButton').attr('disabled') == "disabled"){
      $('#previousButton').removeAttr('disabled');
    }
  }else{
    $('#forwardButton').attr('disabled', 'disabled');
  }
}
function previousSlide(){
  if(previous_slide != 0){
    if(previous_slide != 0){
      changeSlide(previous_slide - 1);
    }
    if($('#forwardButton').attr('disabled') == "disabled"){
      $('#forwardButton').removeAttr('disabled');
    }
  }else{
    $('#previousButton').attr('disabled', 'disabled');
  }
}
function init(){
  var count = true;
  var i = 0;
  do{
    var working = document.getElementById('slide-' + i);
    if(document.body.contains(working)){
      if(i != startSlide){
        toggleSlide(i);
      }
      i++;
    }else{
      count = false;
    }
  }
  while(count == true);
  allSlides = i;
}
init();
$("td > a").on("click", function(event){
  if ($(this).is("[disabled]")) {
    event.preventDefault();
  }
});
