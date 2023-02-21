function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exConstr = new ExampleConstructor();

console.log('value of exConstr:', exConstr);

var instOfExConstr = exConstr instanceof ExampleConstructor;
console.log('value of instOfExConstr:', instOfExConstr);
