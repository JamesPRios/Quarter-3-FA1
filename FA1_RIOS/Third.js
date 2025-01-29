var Consent = confirm("Do you want to share your information?");

if (Consent) {
    
    console.log("Name: " + nickname + "\nHeight: " + convertMyHeight1 + "'" + convertMyHeight2 + "''" + 
        "\nWeight: " + convertMyWeight + " lbs"
    );
} else {
    
    console.log("User does not wish to share his/her information.");
}