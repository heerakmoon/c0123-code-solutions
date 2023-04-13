export default function countValues(stack) {
  let countStack = 0;
  for (let i = 0; stack.peek() !== undefined; i++) {
    stack.pop();
    countStack++;
  }
  return countStack;
}
