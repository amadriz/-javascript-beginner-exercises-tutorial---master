function fizzBuzz() {
    // Your code here
    let number = 100;


    for (let i = 0; i <= number; i++) {
        console.log(i);
        if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5) {
            console.log("Buzz");
        } else if (i % 3 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
    }

}
fizzBuzz();