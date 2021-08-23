//Q1
let csv = "  a,b,c,d,e  ";

console.log(csv.trim());


//Q2
const queryString = 'amazon.com/login?email=a@mail.com&password=123&remember=1'
const usp = new URLSearchParams(queryString)

for (const [key, value] of usp){
    console.log(`${key} => ${value}`)
}
