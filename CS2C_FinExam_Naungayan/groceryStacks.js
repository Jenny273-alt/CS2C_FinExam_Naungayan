const groceryStack = [];
for (let i = 0; i < 5; i++) {
  groceryStack.push(prompt("Enter grocery item:"));
}

function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  } else {
    return groceryStack[groceryStack.length - 1];
  }
}

function push(item) {
  groceryStack.push(item);
  console.log(`Item ${item} added to the stack.`);
  console.log(`Current stack: ${groceryStack}`);
  console.log(`Peek: ${peek()}`);
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
  } else {
    const poppedItem = groceryStack.pop();
    console.log(`Item ${poppedItem} popped from the stack.`);
    console.log(`Current stack: ${groceryStack}`);
    console.log(`Peek: ${peek()}`);
  }
}