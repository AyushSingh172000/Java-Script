// var user = "Ram";
// console.log(`Good Morning ${user}`);

var a="Hii"
const b= Symbol(a)
console.log(b)
console.log(a==b) // false
console.log(a==b.description)  // true

console.log(typeof(b))
console.log(typeof b.description)

// const sum = (a,b)=>a+b;
// const customSum=Symbol(sum)
// console.log(customSum);
// console.log(customSum.description)
// const fun=Function(customSum.description)
// console.log(fun)


