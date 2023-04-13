export default function maxValue(stack) {
  let maxVal = -Infinity;
  if (stack.peek() !== undefined) {
    for (let i = 0; stack.peek() !== undefined; i++) {
      const poppedVal = stack.pop();
      maxVal = poppedVal > maxVal ? poppedVal : maxVal;
    }
  }
  return maxVal;
}
