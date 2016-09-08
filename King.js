//轮播运动
var imgsList = ["img/lubo.jpg","img/lubo3.jpg","img/lubo6.jpg","img/lubo7.jpg"];
var lunboimg = document.getElementById("lunbo-img");
var dds = document.getElementsByTagName("dd");
var imgIndex = 0;
var timer = move();

for(var i = 0; i < dds.length; i++){
	!function(i){
		dds[i].onmouseover = function(){
			window.clearInterval(timer);
			changeBtn(dds,i);
			imgIndex = i;
		};
		dds[i].onmouseout = function(){
			timer = move();
		};
	}(i)
}

function move(){
	return window.setInterval(function(){
		imgIndex++;
		if(imgIndex < imgsList.length){
			lunboimg.src = imgsList[imgIndex];
		}else{
			imgIndex = 0;
			lunboimg.src = imgsList[imgIndex];
		}
		changeBtn(dds,imgIndex);
	},2000);
}

function changeBtn(dds,imgIndex){
	for(var i = 0; i < dds.length; i++){
		if(i == imgIndex){
			dds[i].className = "changeBtn";
			lunboimg.src= imgsList[imgIndex];
		}else{
			dds[i].className = "";
		}
	}
}

//滚动目录

$("#content a").hover(
	function(){
		$(this).addClass("contactive");
	},
	function(){
		$(this).removeClass("contactive");
	}
);

arr=[];
$("div[name]").each(function(i){
	arr[i]=$(this).offset().top-200;
})

$(window).scroll(function(){
	st = $(window).scrollTop();

	for(i=arr.length-1;i>=0;i--){
		if(st>=arr[i]){
			$("#content a").eq(i).addClass("contactive");
			$("#content a").not($("#content a").eq(i)).removeClass("contactive");
			break;
		}
	}

})




//回到顶部移动
window.onscroll=function(){
	var sideBox = document.getElementById("move-return");
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	var targetDot = scrollTop + (document.documentElement.clientHeight-sideBox.offsetHeight)/2;

	startMove(parseInt(targetDot));
}

var returnTimer = null;
function startMove(iTarget){
	var sideBox = document.getElementById("move-return");
	clearInterval(returnTimer);
	returnTimer = setInterval(function(){
		var iSpeed = (iTarget-sideBox.offsetTop)/8;
		iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

		if(sideBox.offsetTop == iTarget){
			clearInterval(returnTimer);
		}else{
			sideBox.style.top = sideBox.offsetTop + iSpeed + "px";
		}
	},28);
}
