import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const thirdArg = Number(process.argv[2]);
const fourthArg = process.argv[3];
const fifthArg = Number(process.argv[4]);

if (fourthArg === 'plus') {
  console.log('result:', add(thirdArg, fifthArg));
} else if (fourthArg === 'minus') {
  console.log('result:', subtract(thirdArg, fifthArg));
} else if (fourthArg === 'over') {
  console.log('result:', divide(thirdArg, fifthArg));
} else if (fourthArg === 'times') {
  console.log('result:', multiply(thirdArg, fifthArg));
}
