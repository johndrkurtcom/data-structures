var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {length : 0, storage : {}};
  //var storage = {};
  //var length = 0;
  // extend instance with stackMethods;
  for (var k in stackMethods) {
  	instance[k] = stackMethods[k];
  }
  return instance;
};

var stackMethods = {
  size               : function(){
  	return this.length;
  },
  push               : function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop                : function(){
    if (this.length > 0){
    	this.length--;
    }
    return this.storage[this.length];
  }

};


