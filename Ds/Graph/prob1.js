// graph
class Graph {
  constructor() {
    this.adjList = new Map();
  }

  insert(vertices, edges, isByDirectional = false) {
    this.adjList.set(vertices, [edges]);
    if (isByDirectional) {
      this.adjList.set(edges, [vertices])
    }
  }
  setNewConnection(vertex, edges) {
    this.adjList.get(vertex).push(edges)
  }
  print() {
    let keys = this.adjList.keys();
    for (let i of keys) {
      let values = this.adjList.get(i);
      let concatinate = '';
      for (let j of values) {
        concatinate += j + ' ';
      }
      console.log(i + ' : ' + concatinate);
    }
  }
  bfs(vertex) {
    let keys = this.adjList.keys();
    let visited = [];
    let q = [];
    q.push(vertex);

    for (let i of keys) {
      visited[i] = false;
    }

    while (q.length > 0) {
      let element = q.shift();
      visited[element] = true;
      console.log(element)
      let valuesList = this.adjList.get(element);
      for (let val in valuesList) {
        let valuesOfKey = valuesList[val];
        if (!visited[valuesOfKey]) {
          q.push(valuesOfKey);
          visited[valuesOfKey] = true;
        }
      }
    }
  }
  dfs(vertex) {
    let key = this.adjList.keys();
    let visited = [];
    for (let i of key) {
      visited[i] = false;
    }
    this.dfsHelper(vertex, visited);
  }
  dfsHelper(vertex, visited) {
    let valuesList = this.adjList.get(vertex);
    console.log(valuesList);
    visited[vertex] = true;
    console.log(vertex);
    if(!valuesList == undefined){
    for (let vals of valuesList) {
      let val = valuesList[vals];
      console.log(val);
      if (!visited[val]) {
        visited[val] = true;
        this.dfsHelper(val, visited);
      }
    }}
  }
}
let g = new Graph();
g.insert('a', 'c');
g.insert('c', 't');
g.insert('d', 'c');
g.insert('t', 'd');
g.setNewConnection('a', 'd');

g.print();
g.bfs('a');
// g.dfs('d');