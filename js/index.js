//鼠标移入视频区域显示按钮，移出视频区隐藏按钮
var ctrl = document.querySelector(".ctrl");
//获取视频区域
var container = document.querySelector(".container");
container.onmouseover = function(){
    ctrl.style.display = "block";   //显示按钮
}
container.onmouseout = function(){
    ctrl.style.display = "none";     //隐藏按钮
}

var v1 = document.getElementById("v1");//获取视频元素
var img3 = document.querySelector(".ctrl img");//获取图片元素
ctrl.onclick = function(e){
    e.preventDefault();  //a绑定事件
    if(v1.paused){       //当前状态:暂停
        v1.play();         //播放视频
        img3.src = "images/pause.png";//切换图片
    }else{
        v1.pause();        //暂停
        img3.src = "images/play.png"; //切换图片
    }
}


