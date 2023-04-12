export default function countValues(stack) {
  let countStack = 0;
  for (let i = 0; i < stack.length; i++) {
    if (stack.pop() !== undefined) {
      countStack++;
    }
  }
  return countStack;
}
