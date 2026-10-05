const students2 = ["salor", "diaz", "rontos"];
const scores2 = [85/100, 95/100, 87100];

const greet2 = name => `Hello, ${name}!`;
const double2 = num => num * 2; 
const getStatus2 = score => `Score: ${score}`;

const names2 = students2.map(name => greet2(name));
const results2 = scores2.map(score => double2(score));


console.log(names2, results2, getStatus2(scores2[0]));
