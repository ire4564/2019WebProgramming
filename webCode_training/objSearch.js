var subject = document.getElementById('subject');
var price = document.getElementById('price');
var select = document.getElementsByClassName('list'); //무엇을 선택했는지
var search_btn = document.getElementById('search');
var table = document.getElementById('data');

var ul = document.getElementById('ul');
var td = document.getElementsByTagName('td');

table.style.visibility = "hidden";
var infoArray = [];

window.onload = function() {
    //table의 정보를 배열에 저장하기

    for(var i=0; i<td.length; i+=2){
        infoArray.push({sub : td[i].innerHTML, pri : parseInt(td[i+1].innerHTML)});
    }
    //배열 생성 체크용
    for(var i=0; i<6; i++){
    //    console.log(infoArray[i]);
    }
}

//검색 버튼을 클릭했을 때
search_btn.onclick = function() {
    var choose = $(':input[name=list]:radio:checked').val();

    if(choose == undefined){
        alert("정렬 기준을 선택해주세요!");
        return 0;
    }  
    else if(choose == "s_sub"){
        //과목 기준 정렬
        infoArray.sort(function (a,b) {
            if(a.sub > b.sub){
               return 1; 
            } else {
                return -1;
            }
        });
    } 
    else if(choose == "s_pri") {
        //가격 기준 정렬
        infoArray.sort(function (a,b) {
            return a.pri - b.pri;
        });

    }

    $("ul").children().remove();

    var check_sub = "";
    var check_price = 0;
    var CHECK = 0;
    //책 제목과 가격을 입력한 경우
    if(subject.value != "" && price.value != ""){
         //infoArray 돌면서 검사
        for(var i=0; i<infoArray.length; i++){
            check_sub = infoArray[i].sub;
            CHECK = check_sub.indexOf(subject.value) !== -1;
            //문자를 가지고 있지 않으면 -1반환
            console.log(CHECK);
            if(CHECK == true){
                check_price = infoArray[i].pri;
                if(check_price >= parseInt(price.value)){
                    var makelist = document.createElement("li"); 
                    makelist.innerHTML = check_sub + " : " + check_price;
                    ul.appendChild(makelist);
                }
            }
        }
    }
    //책 제목만
    else if(subject.value != "" && price.value == ""){ 
        for(var i=0; i<infoArray.length; i++){
            check_sub = infoArray[i].sub;
            CHECK = check_sub.indexOf(subject.value) !== -1;
            //문자를 가지고 있지 않으면 -1반환
            if(CHECK == true){
                    var makelist = document.createElement("li"); 
                    makelist.innerHTML = check_sub + " : " + check_price;
                    ul.appendChild(makelist);
                }
            }
    //가격만
    } else if(subject.value == "" && price.value != ""){
        for(var i=0; i<infoArray.length; i++){
            check_sub = infoArray[i].sub;
            check_price = infoArray[i].pri;
            if(check_price >= parseInt(price.value)){
                var makelist = document.createElement("li"); 
                makelist.innerHTML = check_sub + " : " + check_price;
                ul.appendChild(makelist);
            }
        }
    //둘다 안 입력했을 때
    } else if(subject.value == "" && price.value == ""){
        alert('Enter the keywords of list that you want to search.');
    }
}