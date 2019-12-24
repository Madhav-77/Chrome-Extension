var greet;
var d = new Date();
var hours = d.getHours();
if ((hours >= '4') && (hours < '12')) {
    greet = "Good Morning!";
} else if ((hours >= '12') && (hours < '16')) {
    greet = "Good Afternoon";
} else if ((hours >= '16') && (hours <= '23')) {
    greet = "Good Evening";
} else {
    greet = "Midnight!!";
}
alert(greet);