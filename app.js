  $(document).ready(function() {
        $(document).scroll(function () {
          var $nav = $("#mainNavbar");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
         // closing navbar after click on nav links  
           $('.nav-link').click(function(){
            $(".navbar-collapse").collapse('hide');
        });

    });


