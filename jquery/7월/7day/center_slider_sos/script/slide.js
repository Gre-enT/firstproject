$(function(){
    let width = $(".inner_slide li").outerWidth();
    let now = 1;
    let count = $(".inner_slide li").length;
    let list = "";
    

    $(".inner_slide li:first").appendTo(".inner_slide");

    setInterval(function(){
        if(now == count) {now = 0};
        $(".inner_slide").animate({"margin-left": -width}, 1000, function(){
            $(".inner_slide li:first").appendTo(".inner_slide");
            $(".inner_slide").css({"margin-left": "0px"}, 0)
        });

        now = $(".inner_slide>li:nth-child(2)").children("img").attr("alt")
        $(".dot>li").eq(now).addClass("on").siblings(".dot>li").removeClass("on");

        console.log(now);
    }, 3000);

    for( let i = 1; i <= count; i++){
        list += "<li>" + i + "</li>";
    }

    $(".dot").append(list);
    $(".dot>li").eq(now).addClass("on");


    $(".p_img>li:nth-child(2)").addClass("on");

    setInterval(roll, 3000);

    function roll(){
        $(".p_img").animate({"margin-left":"-336px"}), 1000, function(){
            $(".p_img>li:first").appendTo(".p_img");
            $(".p_img>li:nth-child(2)").addClass("on").siblings(".p_img>li").removeClass("on");
            $(".p_img").css({"margin-left":"0"}, 0);
        }
    }

});