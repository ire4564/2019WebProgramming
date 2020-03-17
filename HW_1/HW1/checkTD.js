var select = document.getElementsByName('select');
var howmany = document.getElementById('Howmany');
var subBtn = document.getElementsByClassName('subBtn');
//칸별로 접근을 해서 누르는 버튼에 대한 td에 접근하여 데이터 변경하기

//변경 버튼을 각각 이벤트를 줘서 처리하기
for(var i=0; i<subBtn.length; i++) {

    subBtn[i].onclick = function() {
 	
	var td = this.parentNode.parentNode;	
        var Testchild = td.childNodes[3].innerHTML;
        Testchild *= 1;
          
	var much = parseInt(td.childNodes[4].childNodes[0].value);
        var mult = much * Testchild;

	var first = parseInt(td.childNodes[5].innerHTML);
	console.log(first);
	console.log(mult);
//	if(mult == first) {
//		alert "수량이 변경되지 않았습니다!";
//	} else {
        	td.childNodes[5].innerHTML = mult;
//	}
        
    }
}


//모두 선택할 때
var allselect = document.getElementById('selectAll');
var checkboxs = document.getElementsByName('select');
var totalPrice = document.getElementById('totalPrice');
var selectText = document.getElementById('selectText');
var totalSelect = 0;
//모두 선택하기 버튼을 눌렀을 때 선택되어있으면 false 아니면 true
allselect.onclick = function() {
	if(allselect.checked == true) {
	for(var k=0; k<checkboxs.length; k++) {
		checkboxs[k].checked = true;
		}
	        totalPrice.innerHTML = Total;
                selectText.innerHTML = "총 " + totalSelect + "개 상품 선택";
                totalSelect = 0;
	} else {
	 for(var k=0; k<checkboxs.length; k++) {
                checkboxs[k].checked = false;
		totalSelect++;
                }
       		totalPrice.innerHTML = 0;
		selectText.innerHTML = "총 0개 상품 선택";
	}	
}

//선택한 객체의 합계 구하기
var order = document.getElementById('order');
var Total = 0;
var checknum = 0;

//아이디는 영문자만 입력할 수 있도록 하기
var onlyid = document.getElementById('client_id');
var base = /^[A-Za-z0-9+]*$/; //영어만 허용하도록

order.onclick = function() {
	 if(!base.test(onlyid.value)) {
                        alert ("아이디가 조건에 맞지 않습니다.");
        } else {

	for(var j=0; j<checkboxs.length; j++) {
		if(checkboxs[j].checked == true) { 
		//체크되어있는 박스가 있다면 Total에 가격더하기
			var td = checkboxs[j].parentNode.parentNode;
			Total += td.childNodes[5].innerHTML *1;	
			console.log(Total);
			checknum++;			
			}	
	}
	totalPrice.innerHTML = Total;
	selectText.innerHTML = "총 " + checknum + "개 상품 선택"; 	
	Total = 0;
	checknum = 0;
	}
}

//선택한 객체 삭제하기
var del = document.getElementById('delect');
del.onclick = function() {
	for(var i=0; i<checkboxs.length; i++){
		if(checkboxs[i].checked == true) {
			var td = checkboxs[i].parentNode.parentNode;
			td.remove();
		}
	}
}
