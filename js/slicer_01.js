// JavaScript Document

$(function(){
	
	var list=$("#list_num>a");
	var li=$("#banner").find("li");
	var i=0;
	var playOn=false;
	var roll;
	li.hide();
	list.click(function(){
		var index=list.index(this);
		if(list.state){
			stop(); //rolling
			imgOff(list.state);
			imgOn(this);
			$(li.state).hide();
			$(li[index]).show();
			i=index;
			play(); //rolling
		}else{
			imgOn(this);
			$(li[index]).show();
			play(); //rolling
		}
		list.state=this;
		li.state=li[index];
		return false;		
	});
	
	$(".left").click(function(){
		i--;
		if(i<0){
			i=list.length-1;
		}
		list[i].click();
	});
	
	$(".right").click(function(){
		i++;
		if(i>list.length-1){
			i=0;
		}
		list[i].click();
	});
	
	$(".stop").click(function(){
		stop();
	});
	$(".play").click(function(){
		play();
	});
	
	function play(){
		if(!playOn){
			playOn=true;
			roll=setInterval(function(){
				$(".right").click()
			},2000);
		}
	}
	
	function stop(){
		if(playOn){
			playOn=false;
			clearInterval(roll);
		}
	}
	
	function imgOn(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("off","on"));
	}
	
	function imgOff(t){
		$(t).find("img").attr("src", $(t).find("img").attr("src").replace("on","off"));
	}
	
	list[0].click();
	
});



























