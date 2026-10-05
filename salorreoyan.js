let count = 0;

function increment() {
  count += 1;
  console.log(`Current Count: ${count}`);
  return count;
}

function decrement() {
  count -= 1;
  console.log(`Current Count: ${count}`);
  return count;
}

function reset() {
  count = 0;
  console.log(`Current Count: ${count}`);
  return count;
}


increment(); 
increment();
decrement(); 
reset();     