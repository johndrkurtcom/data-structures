var Graph = function(){
	this.storage = {};
};

Graph.prototype.addNode = function(node){
	var newNode = new graphNode(node);
	this.storage[node] = newNode;
};

Graph.prototype.contains = function(node){
	for(var key in this.storage){
		if(key === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	if(this.contains(node)){
		delete this.storage[node];
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if(this.contains(fromNode) && this.contains(toNode)){
		if(!!this.storage[fromNode].edgeList[toNode]){
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if (this.contains(fromNode) && this.contains(toNode)) {
		
		this.storage[fromNode].edgeList[toNode] = toNode;
		this.storage[toNode].edgeList[fromNode] = fromNode;
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if (this.contains(fromNode) && this.contains(toNode)) {
		delete this.storage[fromNode].edgeList[toNode];
		delete this.storage[toNode].edgeList[fromNode];
	}
};

Graph.prototype.forEachNode = function(cb){
	for(var k in this.storage){
		cb(k);
	}
};


var graphNode = function(value){
	var node = {};

	node.value = value;
	node.edgeList = {};
	return node;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */

// .addNode()					O(1)
// .contains()				O(n)
// .removeNode()			O(n)
// .addEdge()					O(n)
// .hasEdge()					O(n)
// .removeEdge()			O(n)
// .forEachNode()			O(n)


