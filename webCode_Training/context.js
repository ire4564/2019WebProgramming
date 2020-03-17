var canvas = document.getElementById('area');
context = canvas.getContext('2d');
var video = document.getElementById('video');
/*
window.onload = function() {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
}*/

    video.addEventListener('loadedmetadata', function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    })
    
    
    video.addEventListener('play', function() {
        var $this = this;
        (function loop() {
            if(!$this.paused && !$this.ended) {
                context.drawImage($this, 0, 0);
               // context.setTransform(1, 0, 0, 1, 0, 0);
                setTimeout(loop, 1000/ 30);
            }
        })();
    }, 0);

    $("#area").click(function(e){
        if(video.paused == false) {
            video.paused();
        } else {
            video.play();
        }
    });

    var radius = 0;
    $("#btn").click(function(e){
        radius += 10; 
        setInterval(rotateVideo,33);
    });

var index = 0;
var rotation =1;

function rotateVideo(){
   
     context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.setTransform(1,0,0,1,0,0);
   
      var angleInRadians=rotation*Math.PI/180;
   
      context.translate(50+.5*700, 50+.5*700);
      context.rotate(angleInRadians);
      context.drawImage(video,video.width/2,video.width/2);
      context.restore();
   
      rotation++;
   
}

/*
function rotate(radius) {
    var $this = this;
    if(index == 3){
        console.log(index);
        index = 0;
        
        context.restore();
    } else {
     
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.translate(canvas.width/4, canvas.height/4);
        context.rotate(radius*Math.PI/180);
        context.save();

    //context.drawImage($this, $this.width/2, $this.width/2);
    }
    index++;
}
*/