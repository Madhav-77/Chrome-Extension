var greet;
var d = new Date();
var hours = d.getHours();
hours >= '04' && hours < '12' ? greet == "Good Morning! :)" : hours >= '12' && hours < '16' ? greet == "Good Afternoon" : hours >= '16' && hours < '04' ? greet = "Good Evening" : greet = "Welcome";
alert(greet);