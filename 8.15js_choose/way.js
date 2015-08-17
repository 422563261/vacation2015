var all = document.getElementById('all');
var inall = document.getElementById('inall');
var one = document.getElementById('one').getElementsByTagName('input');


all.addEventListener('click',function (event) {
	if (event.target.checked == true) {
		for (var i = 0; i < one.length; i++) {
			one[i].checked = true;
		};
	}
	if (event.target.checked == false) {
		for (var i = 0; i < one.length; i++) {
			one[i].checked = false;
		};
	}
})

// inall.addEventListener('click',function (event) {
// 	if (event.target.checked == false) {
// 		for (var i = 0; i < one.length; i++) {
// 			if (one[i].checked == false) {
// 				one[i].checked = true;
// 				i = i + 1;
// 			};
// 			one[i].checked = false;
// 		};
// 	};
// 	if (event.target.checked == true) {
// 		for (var i = 0; i < one.length; i++) {
// 			if (one[i].checked == true) {
// 				one[i].checked = false;
// 				i = i + 1;
// 			};
// 			one[i].checked = true;
// 		};
// 	}
// })

inall.addEventListener('click',function(event){
	for (var i = 0; i < one.length; i++) {
		if(one[i].checked == false){
			one[i].checked = true;
		}
		else{
			one[i].checked = false;
		};
	};
	if (one[0].checked) {
		if (one[1].checked) {
			if (one[2].checked) {
				if (one[3].checked) {
					if (one[4].checked) {
						all.checked = true;
					};
				};
			};
		};
	}
	else{
		all.checked = false;
	};
})




for (var i = 0; i < one.length; i++) {
	one[i].addEventListener('click',function(event){
		if (event.target.checked) {
			if (one[0].checked) {
				if (one[1].checked) {
					if (one[2].checked) {
						if (one[3].checked) {
							if (one[4].checked) {
								all.checked = true;
							};
						};
					};
				};
			};
		}
		else{
			all.checked = false;
		}
	})
};