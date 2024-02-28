/*
Last
In
First
Out
*/
class Stack{
    constructor(){
        this.stack = {};
        this.count = 0;
    }
    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.count;
    }
    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }
    peek(){
        return this.stack[this.count - 1];
    }
    size(){
        return this.count;
    }
    print(){
        console.log(this.stack)
    }
}
class Book{
    constructor(name, isbn, author, editorial){
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}
const book1 = new Book("The Great Gatsby", "978-0743273565", "F. Scott Fitzgerald", "Scribner");
const book2 = new Book("To Kill a Mockingbird", "978-0061120084", "Harper Lee", "Harper Perennial Modern Classics");
const book3 = new Book("1984", "978-0451524935", "George Orwell", "Signet Classic");

const stack = new Stack;

stack.push(book1);
stack.push(book2);
stack.push(book3);