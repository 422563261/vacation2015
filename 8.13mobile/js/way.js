var list = document.getElementById('list');
var choose = document.getElementById('choose');
var dark = document.getElementById('dark');
var sure = document.getElementById('sure');
var cancel = document.getElementById('cancel');
var kind = document.getElementById('kind');
var choose_container = document.getElementById('choose_container')


list.addEventListener('touchend',function(){
	choose.style.marginLeft = "50%";
	dark.style.width = "100%";
    dark.style.height = "100%";
})

cancel.addEventListener('touchend',function(){
	choose.style.marginLeft = "100%";
	dark.style.width = "0";
    dark.style.height = "0";
})

sure.addEventListener('touchend',function(){
	choose.style.marginLeft = "100%";
	dark.style.width = "0";
    dark.style.height = "0";
})

kind.addEventListener('touchend',function(){
	
	if (choose_container.style.display != "block") {
		choose_container.style.display = "block";
	}
	else{
		choose_container.style.display = "none";
	}
})