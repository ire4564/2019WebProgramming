<?php
	$name = $_POST["name"];
	$prize = $_POST["prize"];
	$number = $_POST["number"];
	$Filename = $_POST["selectFile"];

	//모든 필드를 입력하지 않았을 경우 오류 메세지 출력
	if(empty($name)||empty($prize)||empty($number)) {
		echo "<p>모든 필드를 입력해주세요.<p>";
	}
//	echo $name. $prize. $number;

	//파일 업로드 하는 중...
	$target_dir = "./images/";
	$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	
	
	// Check if image file is a actual image or fake image
	if(isset($_POST["submit"])) {
    	$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    	if($check !== false) {
       	//	 echo "File is an image - " . $check["mime"] . ".";
       	 	$uploadOk = 1;
    	} else {
       		 echo "<p>파일이 존재하지 않습니다. 파일을 올바르게 입력해주세요.</p>";
      		 $uploadOk = 0;
		 exit;
    		}	
	}

	// Check if file already exists
	if (file_exists($target_file)) {
    		echo "Sorry, file already exists.";
    		$uploadOk = 0;
	}
	// Check file size
	if ($_FILES["fileToUpload"]["size"] > 5000000) {
   		echo "Sorry, your file is too large.";
    		$uploadOk = 0;
	}
	// Allow certain file formats
	if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
	&& $imageFileType != "gif" ) {
    		echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    		$uploadOk = 0;
	}

	// Check if $uploadOk is set to 0 by an error
	if ($uploadOk == 0) {
    		echo "Sorry, your file was not uploaded.";
	// if everything is ok, try to upload file
	} else {
    	if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        	//echo "<p>The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.</p>";
		//echo "<br><img src=./images/". basename( $_FILES["fileToUpload"]["name"]). ">";
		echo "<br><p>저장되었습니다.</p>";
		echo "<a href='Manager.html'>저장 페이지로 돌아가기</a>";
    	} else {
        	echo "<p>Sorry, there was an error uploading your file.</p>";
		echo "<a href='Manager.html'>저장 페이지로 돌아가기</a>";
			}
		}
	//파일 이름 구하기, 확장자 구하기
	$fileinfo = pathinfo($Filename, PATHINFO_DIRNAME);
	$fname = basename($_FILES["fileToUpload"]["name"]);

	//파일 data 디렉토리에 파일로 쓰기
	$file = fopen("./Data/booklist.txt", "a+");
	if(!$file) die("<br>Cannot open the file.");
	$inputList = ($name . "|" . $prize . "|" . $number . "|" . "images/". $fname . "\n");
	$text = "{$inputList}";

	fwrite($file, $text);
	fclose($file);
   	
?>
