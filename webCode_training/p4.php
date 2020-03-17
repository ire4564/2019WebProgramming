<?php
//읽은 데이터 테이블에 삽입하기
$fp = fopen("./score.txt", "r") or die ("파일을 열 수 없습니다!");
$totalnum = 0; //총계
$totalScore = 0; //총평점
$time = 0;

while(!feof($fp)) {
        //읽어온 데이터를 특정 토큰 단위로 끊어서 배열로 저장하기
        $words = explode("|", fgets($fp));

//받아온 데이터가 null일때는 행에 그만 추가하기
        if($words[0] == null) {
                break;
        }

        if($words[2] == 'A'){
                $mul = $words[1]*4.0;
        } else if($words[2] == 'B'){
                $mul = $words[1]*3.0;

         } else if($words[2] == 'C'){
                $mul = $words[1]*2.0;

         } else if($words[2] == 'D'){
                $mul = $words[1]*1.0;

         } else if($words[2] == 'F'){
                $mul = $words[1]*0.0;
        }

        $time += (int)$words[1]; //학점
        $totalnum += (int)$mul; //총계 구하기

        echo "<tr>";
        echo "<td>$words[0]</td>";
        echo "<td name='thisscore'>$words[1]</td>";

        echo "<td><select name='score' class='score'>";
        if($words[2] == 'A'){
         echo "<option value='A' selected='selected'>A</option>";
        } else {
        echo "<option value='A'>A</option>";
        }

        if($words[2] == 'B'){
         echo "<option value='B' selected='selected'>B</option>";
        } else {
        echo "<option value='B'>B</option>";
        }
         if($words[2] == 'C'){
         echo "<option value='C' selected='selected'>C</option>";


} else {
        echo "<option value='C'>C</option>";
        }

        if($words[2] == 'D'){
         echo "<option value='D' selected='selected'>D</option>";
        } else {
        echo "<option value='D'>D</option>";
        }

        if($words[2] == 'F'){
         echo "<option value='F' selected='selected'>F</option>";
        } else {
        echo "<option value='F'>F</option>";
        }

        echo "</select></td>";

        echo "<td><input type='text' value='$words[3]' name='scoretext'></td>";

        echo "<td name='mul'>$mul</td>";

        echo "</tr>";

    }
        //fclose($fp);

        $totalScore = (int)$totalnum/(int)$time;

        //총 계 총 평점
        echo "<tr>";
        echo "<td colspan='4'><b>총 계</b></td>";
        echo "<td id='totalscore'>5555</td>";
        echo "</tr>";
        echo "<tr>";
        echo "<td colspan='4'><b>총 평점</b></td>";
        echo "<td id='totalscore2'>$totalScore</td>";
        echo "</tr>";

?>
