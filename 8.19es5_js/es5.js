


//indexOf
if (typeof Array.prototype.indexOf != "function") {
	Array.prototype.indexOf = function(x,y) {
		if (y <0 || y > this.length - 1) {
			y = 0;
		}
		for (var i = y; i < this.length; i++) { 
			if (this[i] === x) 
			return i; 
		} 
		return -1; 
	} 
};




//lastIndextOf
if (typeof Array.prototype.lastIndexOf != "function") {
	Array.prototype.lastIndexOf = function(x,y) {
		if (y < 0 || y > this.length - 1) {
			y = this.length - 1;
		}
		for(var i = y; i > -1; i--){
            if(this[i] === x){
                return i;
            }
        }
        return -1;
	} 
};





//every
if (typeof Array.prototype.every != "function") {
	Array.prototype.every = function(x,y) {
		if (x === "function") {
			for (var i = 0; i < this.length; i++) {
                if (!x.call(y,this[i],this,i)) {
                	return false;
                    break;
                }
                else{
                	return true;
                }
            }
		};
	} 
};





//some
if (typeof Array.prototype.some != "function") {
	Array.prototype.some = function(x,y) {
		if (x === "function") {
			for (var i = 0; i < this.length; i++) {
                if (x.call(y,this[i],this,i)) {
                    return true;
                    break;
                }
                else{
                	return false;
                }
            }
		};
	} 
};




//foreach
if (typeof Array.prototype.forEach != "function") {
	Array.prototype.forEach = function(x,y) {
		if (x === "function") {
			for (var i = 0; i < this.length; i++) {
            	x.call(y,this[i],this,i);
            }
		};
	} 
};





//map
if (typeof Array.prototype.map != "function") {
	var b = [];
	Array.prototype.map = function(x,y) {
		if (x === "function") {
			for (var i = 0; i < this.length; i++) {
            	b[i] =  x.call(y,this[i],this,i); 
			}
			return b;
		} 
	}
};




//filter
if (typeof Array.prototype.filter != "function") {
	var b = [];
	Array.prototype.filter = function(x,y) {
		if (x === "function") {
			for (var i = 0; i < this.length; i++) {
            	if(x.call(y,this[i],this,i)){
            		b[i] = x.call(y,this[i],this,i); 
            	}
			}
			return b;
		}
	} 
};




//reduce
if (typeof Array.prototype.reduce != "function") {
	var b = [];
	Array.prototype.reduce = function(x,y) {
		var previous = y, k = 0, length = this.length;
		if (typeof y === "undefined") {
			previous = this[0];
			k = 1;
		}
		if (typeof y === "function") {
			for (var i = k; i < length; i++) {
				previous = x.call(previous,this,[i],this,i);
			};
		}
		return previous;
	}
};




//reduceRight
if (typeof Array.prototype.reduceRight != "function") {
	var b = [];
	Array.prototype.reduceRight = function(x,y) {
		var previous = y, k = length-1 , length = this.length;
		if (typeof y === "undefined") {
			previous = this[k];
			k-= 1;
		}
		if (typeof y === "function") {
			for (var i = k; i > -1; i--) {
				previous = x.call(previous,this,[i],this,i);
			};
		}
		return previous;
	}
};


