<?php
        $fp = fopen("./Data/booklist.txt", "r") or die ("파일을 열 수 없습니다!");

        while(!feof($fp)) {
       		$words = explode("|", fgets($fp));
	       	echo $words[1];
		}
        fclose($fp);
 
?>
		
