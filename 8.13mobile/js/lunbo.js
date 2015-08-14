var pic = document.getElementById('lunbo_container');
function startFlash() {
	setTimeout(function() {
		if(pic.style.left == "0%"){
			pic.style.left = "-300%";
		}
		pic.style.left = parseFloat(pic.style.left) + 100 + "%";
		startFlash();
	}, 5000);
}
startFlash();