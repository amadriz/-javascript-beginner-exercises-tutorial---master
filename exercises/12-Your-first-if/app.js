var total = prompt('How many km are left to go?');

// Your code below:

if (total > 100) {
    message = "We still have a bit of driving left to go";
} else if (total <= 50) {
    message = "I'm parking. I'll see you right now";
} else if (total > 50 <= 100) {
    message = "We'll be there in 5 minutes";
}

console.log(message);