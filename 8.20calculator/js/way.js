var box = document.getElementsByTagName('box');
var bag = document.getElementsByTagName('bag');
var show = document.getElementById('show');
var b11 = document.getElementById('b11');
var b12 = document.getElementById('b12');
var b13 = document.getElementById('b13');
var b14 = document.getElementById('b14');
var b21 = document.getElementById('b21');
var b22 = document.getElementById('b22');
var b23 = document.getElementById('b23');
var b24 = document.getElementById('b24');
var b31 = document.getElementById('b31');
var b32 = document.getElementById('b32');
var b33 = document.getElementById('b33');
var b34 = document.getElementById('b34');
var b41 = document.getElementById('b41');
var b42 = document.getElementById('b42');
var b43 = document.getElementById('b43');
var b44 = document.getElementById('b44');
var b51 = document.getElementById('b51');
var b52 = document.getElementById('b52');
var b53 = document.getElementById('b53');
var b54 = document.getElementById('b54');
var num,f,g,m;


b11.addEventListener('click',function(){show.innerHTML = ""});
b21.addEventListener('click',function(){show.innerHTML += "7"});
b22.addEventListener('click',function(){show.innerHTML += "8"});
b23.addEventListener('click',function(){show.innerHTML += "9"});
b31.addEventListener('click',function(){show.innerHTML += "4"});
b32.addEventListener('click',function(){show.innerHTML += "5"});
b33.addEventListener('click',function(){show.innerHTML += "6"});
b41.addEventListener('click',function(){show.innerHTML += "1"});
b42.addEventListener('click',function(){show.innerHTML += "2"});
b43.addEventListener('click',function(){show.innerHTML += "3"});
b51.addEventListener('click',function(){if(show.innerHTML!=""){show.innerHTML += "0"}});

b12.addEventListener('click',function(){alert('此功能暂未开通')});
b13.addEventListener('click',function(){alert('此功能暂未开通')});
b52.addEventListener('click',function(){alert('此功能暂未开通')});

////加法
b44.addEventListener('click',function(){
	f = show.innerHTML;
	show.innerHTML = "";
	num = 1;
});

////减法
b34.addEventListener('click',function(){
	f = show.innerHTML;
	show.innerHTML = "";
	num = 2;
})

////乘法
b24.addEventListener('click',function(){
	f = show.innerHTML;
	show.innerHTML = "";
	num = 3;
})

////除法
b14.addEventListener('click',function(){
	f = show.innerHTML;
	show.innerHTML = "";
	num = 4;
})


b53.addEventListener('click',function(){
	if (num == 1) {
		g = show.innerHTML;
		show.innerHTML = add(f,g);
	}
	if (num == 2) {
		g = show.innerHTML;
		show.innerHTML = sub(f,g);
	}
	if (num == 3) {
		g = show.innerHTML;
		show.innerHTML = mul(f,g);
	}
	if (num == 4) {
		g = show.innerHTML;
		show.innerHTML = chufa(f,g);
	};
})
for (var i = 0; i < box.length; i++) {
	box[i].addEventListener('mousedown',function (event) {
		event.target.style.background = "#9e9e9e";
	})
	box[i].addEventListener('mouseup',function (event){
		event.target.style.background = "#585a5f";
	})
};


for (var i = 0; i < bag.length; i++) {
	bag[i].addEventListener('mousedown',function (event) {
		event.target.style.background = "#fecb4b";
	})
	bag[i].addEventListener('mouseup',function (event){
		event.target.style.background = "#fd9729";
	})
};





function add(a,b){
	var str1,str2,temp;
	var addFlag = 0;
	var max = [],min = [],res = [];
	str1 = a.split("").reverse();
	str2 = b.split("").reverse();

	if (str1.length > str2.length) {
		max = str1;
		min = str2;
	}
	else{
		max = str2;
		min = str1;
	}
	for (var i = 0; i <= max.length - 1; i++) {
		if (i <= min.length - 1) {
			temp = parseInt(max[i]) + parseInt(min[i]) + addFlag;
		}
		else{
			temp = parseInt(max[i]) + addFlag;
		}

		if (temp > 9) {
			res[i] = temp - 10;
			addFlag = 1;
			if (i == max.length - 1) {
				res[max.length] = 1;
			}
		}
		else{
			res.push(temp);
			addFlag = 0;
		}
	};
	return res.reverse().join("");
}


function sub(a,b){
	var str1,str2,temp,des,r;
	var addFlag = 0;
	var max = [],min = [],res = [];
	str1 = a.split("").reverse();
	str2 = b.split("").reverse();

	if (parseInt(a) >= parseInt(b)) {
		max = str1;
		min = str2;
		console.log(max)
	}
	else{
		max = str2;
		min = str1;
		des = -1;
		console.log(max)
	}
	for (var i = 0; i <= max.length - 1; i++) {
		if (i <= min.length - 1) {
			temp = parseInt(max[i]) - parseInt(min[i]) + addFlag;
			//console.log(temp)
		}
		else{
			temp = parseInt(max[i]) + addFlag;
		}

		if (temp <= 0) {
			res[i] = temp + 10;
			addFlag = -1;
			if (i == max.length - 1) {
				res[max.length - 1] = "";
			}
		}
		else{
			res.push(temp);
			addFlag = 0;
		}
	};
	r = res.reverse().join("");
	if (des == -1) {
		return -r;
	}
	else{
		return r;
	}
}


function mul(a,b){
	var str1,str2,temp,n;
	var max = [],min = [],res = [];
	str1 = a.split("").reverse();
	str2 = b.split("").reverse();
	

	if (str1.length > str2.length) {
		max = str1;
		min = str2;
	}
	else{
		max = str2;
		min = str1;
	}

	for (var i = 0; i <= min.length - 1; i++) {
		for (var j = 0; j <= max.length - 1; j++) {
			res[i + j] = 0;
		}
	}

	for (var i = 0; i <= min.length - 1; i++) {
		for (var j = 0; j <= max.length - 1; j++) {
			res[i + j] += parseInt(max[j]) * parseInt(min[i]);
		}
	}
	var m = res.length;
	// console.log(res[0])
	// console.log(res[1])
	// console.log(res[2])
	// console.log(res[3])
	// console.log(res[4])
	// console.log(m);
	for (var n = 0; n < m; n++) {
		if (res[n] >= 10) {
			if (n == m - 1) {
				res[n + 1] = 0;
			}
			res[n + 1] += Math.floor(res[n]/10); 
			res[n] = res[n] % 10;	
		}
	}
	return res.reverse().join("");
}


function chufa(a,b){
	var max,min,temp;
	var res = [];
	var s = 0;
	if (a > b) {
		max = a;
		min = b;
	}
	else{
		max = b;
		min = a;
	}
	if(max - min >= min){
		while(max - min >= 0){
			max -= min;
			console.log(max)
			s++;
			console.log(s)
			if (max - min < min) {
				temp = max;
				// console.log(temp)
			};
		}
	}
	else{
		s = 0;
		temp = max - min;
	}
	res[0] = s;
	res[1] = temp;
	return res.join("…");

}