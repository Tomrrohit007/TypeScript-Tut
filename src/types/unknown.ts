const multiple = (number:unknown) => {
    if(typeof number ==="number") return number*2
    return "Provide a number"
}

console.log(multiple(10))
console.log(multiple("Hello"))