
var nickname = "JR";
var heightInInches = 68; 
var weightInKg = 62; 


var feet = Math.floor(heightInInches / 12); 
var inches = heightInInches % 12; 


var weightInLbs = (weightInKg * 2.20462).toFixed(3);


alert("Name: " + nickname + "\nHeight: " + feet + "’" + inches + "”\nWeight: " + weightInLbs + " lbs");
