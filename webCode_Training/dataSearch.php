<?php
        echo "Hello";
        
        $searchName = $_POST["fileName"];
        $key = $_POST["words"];

        if($fileName==null && $key==null) {
                echo "Enter the keywords of list that you want to search.";
        } else {

        $fp = fopen("./data.txt", "r") or die ("파일을 열 수 없습니다.");
        while(!feof($fp)) {
                $fileName = explode(".", fgets($fp)); //제목.기준으로 읽기
                $filetexts = explode(" ", fgets($fp)); //내용 띄어쓰기 기준

                if($fileName == null || $filetexts == null) {
                        break;
                }

                if(strpos($searchName,$filName[0]) !== false) {
                         echo "<li>$fileName : $filetexts</li>";
                        break;
                } else if(strpos($serachName, $fileName[0]) !== true) {
                        for($c = 0; $c<count($filetexts); $c++) {
                        if(strpos($key, $filetexts[$c]) !== false) {
                                echo "<li>$fileName : $filetexts</li>";
                                break;
                                }
                        }

                } else {
                        echo "No text OR files";
                }
        }

?>
