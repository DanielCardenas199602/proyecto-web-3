$(document).ready(function(){
    $('.bxslider').bxSlider({
         auto: true,
         mode: 'fade',
         captions: true,
         slideWidth: 940
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
