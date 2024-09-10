
let number = Number(prompt("Ədəd daxil edin:"));

let sum = 0;
let i = 100; 

while (i < 1000) {
    if (i % number === 0  ) {
        sum += i;
    }
    i++;
}

alert(sum);
console.log(sum)
