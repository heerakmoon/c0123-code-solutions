let currentCount = 3;

function countDown() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(countDown, 1000);
