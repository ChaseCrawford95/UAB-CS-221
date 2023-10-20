

function test(){
    let input = prompt("Please enter a number");
    document.getElementById("GR").innerHTML = input
    switch(true){
        case input >= 90:
            console.log("A")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LeterGrade").innerHTML="Letter Grade: A"
            document.getElementById("Reward").innerHTML="Reward: Candy"
            break;    
        case input >= 80 && input <= 89:
            console.log("B")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LeterGrade").innerHTML="Letter Grade: B"
            document.getElementById("Reward").innerHTML="Reward: Apple"
            break;
        case input >= 70 && input <=79:
            console.log("C")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LeterGrade").innerHTML="Letter Grade: C"
            document.getElementById("Reward").innerHTML="Reward: Mint"
            break;
        case input >= 60 && input <= 69:
            console.log("D")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LeterGrade").innerHTML="Letter Grade: D"
            document.getElementById("Reward").innerHTML="Reward: Pencil"
            break;
        case input < 60:
            console.log("F")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LeterGrade").innerHTML="Letter Grade: F"
            document.getElementById("Reward").innerHTML="Reward: Awkward conversation with parents"
            break;
        case input = null:
            document.getElementById("GR").innerHTML = "Please enter a number..."
            break;
    }
}
// Sources
// I wanted to figure out how to make a button be used to open up the prompt function. I got help from w3schools with this example: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
// That same example also helped me figure out how to make a JavaScript file manipulate certain tags on the HTML file