$(function(){

	$("section").height($(window).height());
	var imgs=$("img");
	var svgSrc=

["./sources/plane.svg","./sources/propeller.svg","./sources/cloud54.svg","./sources/cloud41.svg","./sources/cloud40.svg"]
	
	for(var i=0;i<svgSrc.length;i++){
		
		imgs[i].src=svgSrc[i];
		console.log(imgs);
		imgs[i].index=i;
		imgs[i].onload=function(){
			
			setTimeout(
			function(){
				$("section>div:first").addClass("fly");
				$("section>div:last").addClass("wow divtwo")
				
			},1000
			)
		}
	}
	$("section>div:last").on("animationend webkitAnimationEnd",function(){
			$("section>div:last").css({"bottom":"0%"})
			
			$(".divtwo").removeClass("wow");
			$(".divtwo>img:first").addClass("cloud-one");
			$(".divtwo>img:nth-child(2)").addClass("cloud-two");
			$(".divtwo>img:last").addClass("cloud-three");
			})

	$("section>div:first").on("animationend webkitAnimationEnd",function(){
			$("section>div:first").css({"top":"25%","left":"22%"})
		
			$("section>div:first").removeClass("fly").addClass("come");
		


		
	})
})
