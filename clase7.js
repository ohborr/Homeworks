//Trees
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    isLeaf() {
        if (this.left == null && this.right == null){
            return true;
        }else{
            return false;
        }
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node (value, null, null);
        if (!this.root) {
            this.root = newNode;
        }else{
            let current = this.root;
            let isFound = false;

            while (!isFound) {
                if (current.value === value){
                    isFound = true;
                    return null
                }
                if (current.value > value){
                    if (!current.left){
                        current.left = newNode;
                        isFound = true;
                        return this
                    }else{
                        current = current.left;
                    }
                    }else{
                        if(current.right){
                            current.right = newNode;
                            isFound = true;
                            return this
                        }else{
                            current = current.right;
                        
                    }
                }
            }
        }
    }
}
//n-ary trees:
class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }
    isLeaf(){
        if (this.children.length === 0){
            return true;
        }else{
            return false;
        }
    }
}
class NaryTree{
    constructor(){
        this.root = null;
    }

    search( value, node = this.root){
        if (!this.root){
            return null;
        }
        if (this.root.value === value){
            return this.root;
        }else{
            const children = node.children;

            const inChildren = children.find( item => item.value === value)
            if ( inChildren ) {
                return inChildren;
            }else{
                let hasChild;
                children.forEach(item => {
                    if (hasChild){
                        return;
                    }

                    hasChild = this.search(value, item)
                })

                return hasChild;
            }
        }
    }

    insert(value, parent){
        const newMode = new Node(value);

        if (!parent){
            if (!this.root){
                this.root = newNode;
            }else{
                return null;
            }
        }else{
            const parentNode = this.search(parent);
            parentNode.children.push(newNode);
        }
    }
    preOrder(node = this.root){
        if (!node){
            return;
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    postOrder(node = this.root){
        if (!node){
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }
    inOrder(node = this.root){
        if(!node){
            return;
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.value);
    }
}



//Challenge
class Node {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.children = [];
    }

    isLeaf() {
        return this.children.length === 0;
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    search(fullName, node = this.root) {
        if (!this.root) {
            return null;
        }
        if (node.fullName === fullName) {
            return node;
        } else {
            const inChildren = node.children.find(item => item.fullName === fullName);
            if (inChildren) {
                return inChildren;
            } else {
                let hasChild;
                node.children.forEach(item => {
                    if (hasChild) {
                        return;
                    }
                    hasChild = this.search(fullName, item);
                });
                return hasChild;
            }
        }
    }

    insert(fullName, birthdate, parentFullName) {
        const newNode = new Node(fullName, birthdate);

        if (!parentFullName) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parentFullName);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                return null;
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.fullName);
        node.children.forEach(child => this.preOrder(child));
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }
        node.children.forEach(child => this.postOrder(child));
        console.log(node.fullName);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }
        this.inOrder(node.children[0]); 
        console.log(node.fullName); 
        for (let i = 1; i < node.children.length; i++) {
            this.inOrder(node.children[i]); 
        }
    }
}

const familyTree = new NaryTree();
familyTree.insert("Juan", "22/12/2003");
familyTree.insert("Yaneth", "29/06/1968", "Juan");
familyTree.insert("Carlos", "26/03/1960", "Juan");

console.log(familyTree.preOrder());
console.log(familyTree.postOrder());
console.log(familyTree.inOrder());