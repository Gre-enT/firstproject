let addbtn = document.getElementById("add");

addbtn.addEventListener("click", addList);

let itemList = [];

function addList() {
    let item = document.getElementById("item");
    let listTxt = item.value;
    console.log(listTxt);

    if (listTxt != "" && listTxt != null){
        itemList.push(listTxt);
        console.log(itemList)
        item.value = "";
    }   
    showList();
    
    item.focus();
}

function showList() {
    let ul = "<ul>";
    for(let i=0; i<itemList.length; i++){
        ul += "<li>" + itemList[i] +
        "<span class='close' id='" + i + "'> X </span>" +
         "</li>"
         // <li> 등록한 글 <span class='close' id = 'i'>X</span>
    }
    ul += "</ul>";

    let itemBox = document.getElementById("itemList");

    itemBox.innerHTML = ul;

    let closeBtn = document.querySelectorAll(".close");
    for(let i=0; i<closeBtn.length; i++){
        closeBtn[i].addEventListener("click", remove);
    }
}

function remove(){
    let indexNum = this.getAttribute("id");
    console.log(indexNum);

    itemList.splice(indexNum, 1); // 삭제할 인덱스 번호, 삭제할 갯수

    showList();
}