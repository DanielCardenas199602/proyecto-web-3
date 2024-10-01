$(document).ready(function(){
 $('.bxslider').bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: false,
  pager: false,
  responsive: true,
  slideWidth: 1870
    })



    $("#menu_ham").hide();

    $("#ham").click(function(){

      $("#menu_ham").show();
      $("#ham").hide();


    
    });


    $("#cierra").click(function(){
  
      $("#menu_ham").hide();
      $("#ham").show();
    });













});

