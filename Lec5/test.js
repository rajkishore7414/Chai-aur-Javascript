const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(sym1);
console.log(sym2);
console.log(sym3);

if(sym2 == sym3)
    console.log("true");
else
    console.log("false")