$(function(){
///////////////////// 호버이벤트 정리 //////////////////////
    $(".gnb>li").mouseover(function(){
        $(this).css("background-color", "skyblue");

        $(this).children(".sub_menu").stop().slideDown(400);
    })
    $(".gnb>li").mouseleave(function(){
        $(this).css("background-color", "")
        $(this).children(".sub_menu").stop().slideUp(400);
    })

    $(".sub_menu>li").mouseover(function(){
        $(this).css("background-color", "rgb(245, 126, 41)");
        $(this).children("a").css("color", "white");
    })
    $(".sub_menu>li").mouseleave(function(){
        $(this).css("background-color", "");
        $(this).children("a").css("color", "");
    })

    $(".top_news").mouseover(function(){
        $(".top_img>img").css({
            "transform":"scale(1.05)",
            "transition-duration":"0.2s"
        })
    })
    $(".top_news").mouseleave(function(){
        $(".top_img>img").css({
            "transform":"",
            "transition-duration":""
        });
    })
/////////////////////////////////////////////////////////////


////////////////////// 팝업 BG 이벤트 ////////////////////////
    $(".popup_btn").click(function(){
        $(".popup_bg").css("z-index",100)   // z-index가 먼저 변해야 어색하지 않음.
            .stop().animate({
            "opacity":1,
            }, 0);
    })
    $(".popup_bg").click(function(e){
        $(".popup_bg").animate({            // popup이 꺼질때는 z-index가 나중에 변해야 어색하지 않음.
            "opacity":0
            }, 0, function(){
                $(".popup_bg").animate({"z-index":-10})
            }
        );
    })

    $(".popup").click(function(e){          // 외부를 제외한 다른곳을 선택했을 때 팝업이 꺼지는 것을 방지
        e.stopPropagation();                // 이벤트 버블링 방지.
    })


//////////////////////////////////////////////////////////////


///////////////////// 480px 메뉴 소환 /////////////////////////
    $(".toggle").click(function(){
        // console.log($(this).css("margin-top"))
        if($(".gnb").css("display") == "none"){
            $(".gnb").stop().slideDown(300);
        }
        else{
            $(".gnb").stop().slideUp(300);
        }
    })

///////////////////// TOP 버튼 이벤트 /////////////////////////

$(window).scroll(function TopButton(){
    if($(this).scrollTop() > 100){
        $(".TOP").fadeIn();
    }
    else {
        $(".TOP").fadeOut();
    }
})

///////////////// 뉴스 탭메뉴 이벤트 - 15초>10초>5초 ////////////////////
//////// 마우스 호버시 이벤트 발생하지 않으므로 5초면 충분한듯. ///////////
    let news_now = 0;

    let sub_width = 0;

    /////////// 탭메뉴 리스트 불러오기 ///////////

    let sub_num = 0; // 나중에 객체 생성할 때 갯수

    $.ajax({
        url:"data/subject.json",
        dataType: "json",
        success: function(data){
            sub_num = data.length;
            // console.log(data);
            
            let subList = "<ul class='sub_list'>";
            


            let news_string = "<div class='subNews'>"

            for(i in data){
                let $subject = data[i].subject;
                subList += "<li>" + $subject + "</li>";


            //////////////데이터를 미리 불러오기 위한 코드///////////////////
                let sub_i = Number(i);
                $.ajax({
                    url:"data/sub"+ (sub_i+1) + ".json",
                    dataType:"json",

                    async:false,    // 이부분 중요! ajax는 비동기식으로 동작하므로 동기식 동작이 필요한 경우 비동기 비활성화!

                    success: function(subData){
                        /****** 데이터 갯수는 최대 5개 ******/
                        let dataLength = 0;
                        if(subData.length<5){
                            dataLength = subData.length;
                        }
                        else{
                            dataLength = 5;
                        }
        
                        // console.log(data);
                        // console.log(dataLength);
                        /**********************************/

                        news_string += "<ul>";   
                        for(j=0; j<dataLength ;j++){
                            // console.log(sub_i);
                            let $subid = subData[j].id;
                            let $contents = subData[j].contents;
                            let $date = subData[j].date;
        
                            news_string += "<li class='hot_news'><strong>" + $subid + "</strong>";
                            news_string += "<span class='hot_contents'>" + $contents + "</span>";
                            news_string += "<span class='hot_date'>" + $date + "</span></li>";
        
                        }
        
                        news_string += "</ul>";
                    },
                    error: function(){
                        alert("sub"+i+".json 불러오기 실패");
                    }
                })

            }
            subList += "</ul></div>";
            // console.log(subList);

            $(".con_right>h2").after(subList);

            

            ////////// 그냥 불러올 경우 데이터를 가져오지 못함. setTimeout으로 지연시간을 주고 불러옴 //////////
            $(".sub_list").after($("<div class='subWrap'></div>"));
            $(".subWrap").append(news_string);

            sub_width = $(".subWrap").outerWidth();

            $(".subWrap").children(".subNews").css("width", sub_num*sub_width+"px");
            $(".sub_list>li").eq(news_now).addClass("on");




        },
        error: function(){
            alert("실패");
        }                
    })

    ////////// 탭메뉴 - ajax 연동 슬라이드는 구현이 복잡해서 취소 //////////
    ////////// 취소했다가 다시 코드 갈아엎음. //////////

    let sub_move = setInterval(sub_change, 5000); // 5초에 한번 돌아감.
    function sub_change(){
        news_now++;
        if(news_now == $(".sub_list>li").length){
            news_now = 0;
        }
        $(".sub_list>li").eq(news_now).addClass("on")
        .siblings(".sub_list>li").removeClass("on");
        subject_slide();
    }

    ////////// 탭메뉴 선택해요 /////////
    $(document).on({
        click:function(){
            news_now = $(this).index()
            $(this).addClass("on")
            .siblings("li").removeClass("on");
            subject_slide();
        },
        mouseenter:function(){
            clearInterval(sub_move);
        },
        mouseleave:function(){
            sub_move = setInterval(sub_change, 5000);
        }
    }, ".sub_list>li")

    
    ////////// 동적 객체 바인딩을 모르면 안되는 이유 /////////
    // $(".sub_list>li").on({
    //     mouseenter:function(){
    //         clearInterval(sub_move);
    //         console.log(this);
    //     },
    //     mouseleave:function(){
    //         sub_move = setInterval(sub_change, 5000);
    //         console.log(this);
    //     },
    //     click:function(){
    //         $(this).addClass("on")
    //         .siblings("li").removeClass("on");
    //     }
    // })
    /////////////////// 이거로 안됨 ///////////////////////


    //////////////// 슬라이드 //////////////////

    function subject_slide(){
        // console.log(news_now*sub_width*-1);
        $(".subNews").css({
            "left": news_now*sub_width*-1+"px",
            "transition":"0.5s"
        }).children("ul").css({
            "width":$(".subWrap").outerWidth()
        });
    }


    /////////// 서브뉴스에 마우스 가 올라가있어도 애니메이션 멈춤 ////////////
    $(document).on({
        mouseenter:function(){
            clearInterval(sub_move);
        },
        mouseleave:function(){
            sub_move = setInterval(sub_change, 5000);
        }
    }, ".subNews>p");

    /////////// 화면 크기 변경 이벤트 /////////////

    $(window).resize(function(){
        sub_width = $(".subWrap").outerWidth();

        $(".subNews").css({
            "width":sub_num*sub_width+"px",
            "left": news_now*sub_width*-1+"px",
            "transition" : "none"
        }).children("ul").css({
            "width":sub_width
        });

        if($(window).width()<=480){
            if($(".gnb").css("display")=="block"){
                $(".gnb").css("display", "none");
            }
        }
        else{
            if($(".gnb").css("display")=="none"){
                $(".gnb").css("display", "block");
            }
        }
    })
})




