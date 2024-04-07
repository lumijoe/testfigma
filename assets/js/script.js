// slideup, slidedown
// デモテストアラート
$(function() {
    alert('デモテスト用です(' + String.fromCharCode(169) + 'ikkosha.co.jp)');

    $(window).scroll(function() {
        
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        $(".box, .text, .text80").each(function() {
            const boxTop = $(this).offset().top;
            if (scroll + windowHeight > boxTop + 300) {
                $(this).addClass("is-active");
            }
            // else {
            //     $(this).removeClass("is-active");
            // }
        });
    });
});

