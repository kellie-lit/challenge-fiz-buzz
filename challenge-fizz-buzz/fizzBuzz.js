// Write your solution below this line:

// Write your solution below this line: // Loop for 1 to 50 (inclusive) // if the number is evenly divisible by 3: fizz // if the number is evenly divisible by 5: buzz // if evenly divisible by both 3 & 5: fizzbuzz // otherwise, print number  

for (let i=1; i<=50; i++) {
    if (i % 3  === 0) {
            console.log("fizz");
    }
    else if (i % 5 === 0 ) {
            console.log("buzz");
    }
    else if (i % 3 && 5  === 0 ) {
            console.log("fizzbuzz");
    } else console.log(i)
}