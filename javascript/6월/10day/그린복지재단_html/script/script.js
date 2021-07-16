//팝업
let box = document.querySelector(".box");
let popup = document.getElementById("popup");
let close = document.querySelector(".close");

box.onclick = function() {
    popup.style.display("block");
}

close.onclick = function(){
    popup.style.display("none");
}


// 슬라이더
let top_banner = document.querySelector(".top_banner");

// setInterval(function(){
//     top_banner.style.left = -1200+"px";
// }, 3000)
let num = 0;
setInterval(function(){
    num++;

    if(num>3){
        num = 0;
        top_banner.style.left = -1200*num+"px";
        top_banner.style.transition = "none"
    }
    else{
        top_banner.style.left = -1200*num+"px";
        top_banner.style.transition = "left 2s"
    }
    
}, 3000)



let tab_menu = document.querySelectorAll("#tab_menu>a");
let tab_box = document.querySelectorAll("#tab_box>.list");

tab_menu[0].onclick - function(){
    tab_menu[1].classList.remove("on");
    tab_menu[0].classList.add("on");
}
tab_menu[1].onclick - function(){
    tab_menu[1].classList.add("on");
    tab_menu[0].classList.remove("on");
}


for(let i=0; i<tab_menu.length; i++){
    tab_menu[i].addEventListener("click", function(){
        for(let i=0; i<tab_menu.length; i++){
            tab_menu[i].classList.remove("on");
            tab_box[i].style.display="none";
        }
        console.log(this);
        this.classList.add("on");
        tab_box[i].style.display = "block";

    })
}