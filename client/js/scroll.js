(function ($) {
    $(document).ready(function(){

        //hide .navbar first
        $('.navscroll').hide();

        $(function(){
            $(window).scroll(function(){
                
                //distance the user needs to scroll to fadein
                if($(this).scrollTop() > 400){
                    $('.navscroll').fadeIn();
                }else{
                    $('.navscroll').fadeOut();
                }
            });
        });
    });
}(jQuery));