let isSubscribed = false;
let age = 17;

if (age < 18 && !isSubscribed) {
    console.log("The user is younger than 18 and is not subscribed");
} else if (age >= 18 && !isSubscribed) {
    console.log("The user is 18 or older and is subscribed");
} else if (age < 18 && isSubscribed) {
    console.log("The user is older than 18 and is subscribed");
} else {
    console.log("The user is 18 or older and is subscribed");
}