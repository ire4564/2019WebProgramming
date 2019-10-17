<!DOCTYPE html>
    <html>
        <head>
            <title>상품 주문하기</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="ClientCSS.css">
	    <script type="text/javascript" src="checkTable.js"></script>	
        </head>
        <body>
            <div class="boxC">
                <h1>도서 주문 페이지</h1><br/>
                <h5>구매자 아이디 : </h5><input type="text" id="client_id"><br/><br/>
                <input type='checkbox' name="selectAll" value="selectAll"/>모두선택<br/><br/>
                <table>
                    <tr>
                        <th>선택</th>
                        <th>상품명</th>
                        <th>미리보기</th>
                        <th>정가</th>
                        <th>수량</th>
                        <th>합계</th>
                    <tr>
			 <?php include '/var/www/html/HW1/readList.php';?>
	     	    </tr>
                    <tr>
			<td colspan="5"><b>선택한 총 상품 금액</b></td>
                        <td>0</td>
                    </tr>
                </table>
                <br/><h5>총 0개 상품 선택</h5><br/>
                <br/><button id='delect'>삭제하기</button><button id='order'>주문
하기</button>
            </div>
        </body>
    </html>


