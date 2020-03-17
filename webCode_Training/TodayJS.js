var addlist = document.getElementById('addBtn');
var list = document.getElementById('lists');
var texts = document.getElementById('addlist');
var fixBtn = document.getElementById('fixBtn');

//마우스를 올렸을 때  -> 빨간색으로 바뀐다
function changeColor(clicked_id) {
    var clicked = document.getElementById(clicked_id);
    clicked.style.color = "red";
};

//마우스를 내렸을 때 -> 검은색으로 돌아온다
function changeColorDown(clicked_id){
    var clicked = document.getElementById(clicked_id);
    clicked.style.color = "black";
}

var idIndex = 0;
//리스트에 항목 추가
addBtn.onclick = function(event){ 
    var todo = texts.value;
    var list_num = document.createElement('li');
    list_num.appendChild(document.createTextNode(todo));

    list_num.setAttribute("id", "list"+idIndex);
    list_num.setAttribute("onmouseover", "changeColor(this.id)");
    list_num.setAttribute("onmouseout", "changeColorDown(this.id)");
    list_num.setAttribute("onclick", "clickList(this.id)");

    list.appendChild(list_num);
    texts.value = "";
    idIndex++;
};

// 클릭시 remove
function clickList(clicked_id) {
    var clicked = document.getElementById(clicked_id);
    alert("Are you really going to remove?");
    clicked.remove();
}

var numbers = document.getElementById('number');
var detail = document.getElementById('detail');

//내용 수정하기
fixBtn.onclick = function() {
    var indexs = numbers.value; //바꿀 번호 인덱스
    var textDetail = detail.value; //바꿀 내용

    list.childNodes[indexs].innerHTML = textDetail;

    numbers.value = "";
    detail.value = "";

}