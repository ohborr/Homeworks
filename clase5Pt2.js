/*
First
In
First
Out
*/
class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }
    dequeue(){
        return this.queue.shift();
    }
    peek(){
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    print(){
        return this.queue;
    }
}

class People{
    constructor(name, arrivedTime){
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}
const persona1 = new People("Juan", "09:00");
const persona2 = new People("María", "09:15");
const persona3 = new People("Pedro", "09:30");

const queue = new Queue;

queue.push(persona1);
queue.push(persona2);
queue.push(persona3);
