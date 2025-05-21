$(document).ready(function(){
    var winS, winSC, cls_cntWid, cls_cntHig, cntWid, cntHig, cls_PosLft, cls_PosTop, mdl_hig, mdl_wth, htm_Hig, winHig  = 0;
    
    /*Open Model on Click*/
    $(document).on('click', '.GalCnt_li .GalCnt_btn', function(evt) {
        evt.stopPropagation();
         winS = $(window).scrollTop();
        $('body, html').addClass('ovrLay');
            htm_Hig = $('html').height();
            winHig = $(window).height();
            cntWid = $(this).width();
            cntHig = $(this).height();
            mdl_hig = 500; /* define model Height*/
            mdl_wth = 800; /* define model width*/
            cls_cntWid = cntWid;
            cls_cntHig = cntHig;
        let uTub = $(this).parent('.GalCnt_li').html();
        if ($('.wp_GalCnt_pop').length) {
            $('.wp_GalCnt_pop, .GalCnt_pop').remove();
        }
        let cntPos = $(this).offset(); // img positon x and y
        cls_PosLft = cntPos.left;
        cls_PosTop = cntPos.top;
        $('body').append('<div class="wp_GalCnt_pop"><div class="GalCnt_pop"><a href="javascript:void(0)" class="GalCnt_cls">X</a>' + uTub + '</div></div>')
        
        $('.wp_GalCnt_pop').css({
            "height": htm_Hig // get overlay height
        });
        $('.GalCnt_pop').css({
            "left": cls_PosLft,
            "top": cls_PosTop,
            "width": cntWid,
            "height": cntHig
        }); //assign offset position 

        $('.GalCnt_pop').show().animate({
                "width": mdl_wth,
                "height": mdl_hig,
                "left": "50%",
                "margin-left": "-" + mdl_wth/2,
                "top": (winHig / 2) + winS ,
                "margin-top": "-" + mdl_hig/2,
            }, 170);
    });

    /* Close Model */
    $(document).on('click', 'body, .GalCnt_cls', function() {
        if ($('.wp_GalCnt_pop').length) {
            $('body, html').removeClass('ovrLay');
            $('.GalCnt_pop').animate({
                "width": cls_cntWid,
                "height": cls_cntHig,
                "left": cls_PosLft,
                "top": cls_PosTop,
                "margin-left": 0,
                "margin-top": 0
            }, 600);
            $('.wp_GalCnt_pop').fadeOut(200)
            setTimeout(function() {
                $('.GalCnt_pop, .wp_GalCnt_pop').remove();
            }, 700)
        }
    });
    /* stop  Model on screen */
    $(document).on('click', '.GalCnt_pop', function(evt) {
        evt.stopPropagation();
    });
 
});