/*Grafos:
Dónde pueden usarse:
- Computer networks
- Street maps
- Social networks
- Flight map
*/ 
class Graph{
    constructor(){
        this.nodes = [];
        this.adjList = {}
    }

    addNode(node){
        this.nodes.push(node)
        this.adjList[node] = []
    }

    addEdge(node1, node2){
        this.adjList[node1].push(node2)
        this.adjList[node2].push(node1)
    }

    printGraph(){
        console.log(this.adjList)
    }

    searchNode(value){
        if(!this.nodes.length){
            return ;
        }
        return this.nodes.find(item => item === value);
    }

    printAdjacency(value){
        if(this.searchNode(value)){
            console.log(this.adjList[value])
        }else{
            return ;
        }
    }
}

const myGraph = new Graph();

myGraph.addNode("Juan");
myGraph.addNode("David");
myGraph.addNode("Diego");
myGraph.addNode("Cristian");
myGraph.addNode("Samuel");

myGraph.addNode("Cali");
myGraph.addNode("Bogotá");
myGraph.addNode("Barrancabermeja");
myGraph.addNode("Palmira");

myGraph.addEdge("Juan", "Bogotá");
myGraph.addEdge("Diego", "Barrancabermeja");
myGraph.addEdge("David", "Cali");
myGraph.addEdge("Cristian", "Palmira");
myGraph.addEdge("Samuel", "Barrancabermeja");


console.log(myGraph.printGraph());

const cityToSearch = "Barrancabermeja";
console.log(`Personas que viven en ${cityToSearch}:`);
myGraph.printAdjacency(cityToSearch);
