var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {storage : {}, length : 0};
  /*for (var key in queueMethods) {
  	queueInstance[key] = queueMethods[key];
  }*/
  _.extend(queueInstance, queueMethods);
  return queueInstance;
};

var queueMethods = {
	size             : function(){
		return this.length;
	},
	enqueue          : function(value){
        this.storage[this.length] = value;
        this.length++;
	},
	dequeue          : function(){
		if (this.length > 0){
			var temp = this.storage[0];
			for (var i = 0; i < this.length; i++) {
				this.storage[i] = this.storage[++i];
			}
			this.length--;
		}
		return temp;
	}
};



