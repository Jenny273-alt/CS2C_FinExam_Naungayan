const dataStructures = "Data Structures - Array";
const variableType = "Variable Type - Integer";
const sortingAlgorithm = "Sorting Algorithm - Bubble Sort";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    this.print();
  }

  print() {
    let current = this.head;
    let list = "";
    while (current !== null) {
      list += current.value + " ";
      current = current.next;
    }
    console.log(list);
  }
}

const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);