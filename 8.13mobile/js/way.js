$(document).ready(function(){
	var type,way,sexy,pay,time;
	type = 1;way = 1;sexy = 1;pay = 1;time = 1;
	$("#first").click(function(){
		$("#first").attr("class","box box_active");
		$("#find").attr("class","box");
		$("#message").attr("class","box");
		$("#me").attr("class","box");

	});
	$("#find").click(function(){
		$("#first").attr("class","box");
		$("#find").attr("class","box box_active");
		$("#message").attr("class","box");
		$("#me").attr("class","box");
	});
	$("#message").click(function(){
		$("#message").attr("class","box box_active");
		$("#find").attr("class","box");
		$("#first").attr("class","box");
		$("#me").attr("class","box");
	});
	$("#me").click(function(){
		$("#me").attr("class","box box_active");
		$("#find").attr("class","box");
		$("#message").attr("class","box");
		$("#first").attr("class","box");
	});
	$(".list").click(function(){
		$(".hide").animate({
			width:"100%"
		});
		$(".hide_list").animate({
			left:"50%"
		});
		$(".choose_boss").css("display","none");
	});
	$(".sure").click(function(){
		$(".hide").animate({
			width:"0"
		});
		$(".hide_list").animate({
			left:"100%"
		});
		$(".choose_boss").css("display","none");
		$(".kind").attr("src","img/kind.png");
		type = 1;way = 1;sexy = 1;pay = 1;time = 1;
	});
	$(".cancel").click(function(){
		$(".hide").animate({
			width:"0"
		});
		$(".hide_list").animate({
			left:"100%"
		});
		$(".kind").attr("src","img/kind.png");
		type = 1;way = 1;sexy = 1;pay = 1;time = 1;
	});
	$("#type").click(function(){
		$(".choose_type").fadeToggle();
		if (type) {
			$(".type").attr("src","img/kind_.png")
			type = 0;
		}
		else{
			$(".type").attr("src","img/kind.png")
			type = 1;
		}
		
	});
	$("#way").click(function(){
		$(".choose_way").fadeToggle();
		if (way) {
			$(".way").attr("src","img/kind_.png")
			way = 0;
		}
		else{
			$(".way").attr("src","img/kind.png")
			way = 1;
		}
		
	});
	$("#sexy").click(function(){
		$(".choose_sexy").fadeToggle();
		if (sexy) {
			$(".sexy").attr("src","img/kind_.png")
			sexy = 0;
		}
		else{
			$(".sexy").attr("src","img/kind.png")
			sexy = 1;
		}
		
	});
	$("#pay").click(function(){
		$(".choose_pay").fadeToggle();
		if (pay) {
			$(".pay").attr("src","img/kind_.png")
			pay = 0;
		}
		else{
			$(".pay").attr("src","img/kind.png")
			pay = 1;
		}
		
	});
	$("#time").click(function(){
		$(".choose_time").fadeToggle();
		if (time) {
			$(".time").attr("src","img/kind_.png")
			time = 0;
		}
		else{
			$(".time").attr("src","img/kind.png")
			time = 1;
		}
		
	});
})

