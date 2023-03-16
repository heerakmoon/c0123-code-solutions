import takeAChance from './take-a-chance.js';

const takeAChancePromise = takeAChance('Heerak');

takeAChancePromise
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject.message));
