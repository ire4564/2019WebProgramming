<?php
	//읽은 데이터 테이블에 삽입하기
	$fp = fopen("./Data/booklist.txt", "r") or die ("파일을 열 수 없습니다!");
	while(!feof($fp)) {
		//읽어온 데이터를 특정 토큰 단위로 끊어서 배열로 저장하기
               	$words = explode("|", fgets($fp));

		//받아온 데이터가 null일때는 행에 그만 추가하기
		if($words[0] == null) {
			break;
		}

		$totalPrize = $words[1] * $words[2];
                 
		echo "<tr>";
		echo "<td><input type='checkbox' name='select' value='select'/></td>";
                echo "<td>$words[0]</td>";
		echo "<td><button><a href= $words[3]>미리보기</a></button></td>";
		echo "<td>$words[1]</td>";
	//	echo "<form action='Howmuch.php'>";
		echo "<td><input type='text' id='Howmany' value='$words[2]'><input type='submit' id='submitMany' value='변경'></td>";
	//	echo "</form>";
		echo "<td>$totalPrize</td>";
		echo "</tr>";

              }
?>
