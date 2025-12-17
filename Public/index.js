// Ask how many times to spam
let times = prompt("How many times do you want to spam the message?");
times = Number(times);

// Ask for the message
let message = prompt("Enter the message to spam");

// Check input and spam
if (Number.isInteger(times) && times > 0) {
    for (let i = 1; i <= times; i++) {
        console.log(i + ": " + message);
    }
} else {
    alert("Please enter a valid positive number.");
}
