$(function(){

    $('#letsgetit').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#war').offset().top }, 1000);
      e.preventDefault();
    });
    
    });


    $(function(){

      $('#footer_btn').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#table_of_contents').offset().top }, 3100);
        e.preventDefault();
      });
      
      });

      $(function(){

        $('#footer_btn2').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#end').offset().top }, 90000);
          e.preventDefault();
        });
        
        });



          

    $(function(){

        $('#letsgetit2').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#rules').offset().top }, 1000);
          e.preventDefault();
        });
        
        });

        $(function(){

          // leanModal v1.1 by Ray Stone - https://finelysliced.com.au
      // Dual licensed under the MIT and GPL
      
      (function($){$.fn.extend({leanModal:function(options){var defaults={top:100,overlay:0.5,closeButton:null};var overlay=$("<div id='lean_overlay'></div>");$("body").append(overlay);options=$.extend(defaults,options);return this.each(function(){var o=options;$(this).click(function(e){var modal_id=$(this).attr("href");$("#lean_overlay").click(function(){close_modal(modal_id)});$(o.closeButton).click(function(){close_modal(modal_id)});var modal_height=$(modal_id).outerHeight();var modal_width=$(modal_id).outerWidth();
      $("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);$(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":o.top+"px"});$(modal_id).fadeTo(200,1);e.preventDefault()})});function close_modal(modal_id){$("#lean_overlay").fadeOut(200);$(modal_id).css({"display":"none"})}}})})(jQuery);
        
      $("#go").leanModal();
        $("#go2").leanModal();
      
      });


      // $('#footer_btn2').click(function(){
      //   var myAudio = document.getElementById("audio");
      //   myAudio.pause();
      // });

      // function playMusic(){
      //   var music = new Audio('See You Again feat Charlie Puth  - Wiz Khalifa feat Charlie.mp3');
      //   music.play();
      //   }


      function send1(){
        var music = new Audio('See You Again feat Charlie Puth  - Wiz Khalifa feat Charlie.mp3');
        music.play();
        $("#footer_btn2").css("display", "none"); 
      }
       
      function send2(){
        var myAudio = document.getElementById("audio");
        myAudio.pause();
      }

      function send3(){
        $(".end").css("display", "block"); 
      }


      

    