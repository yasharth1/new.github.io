alert("Welcome! This webpage can change its color to anything you want! No, it's not magic, it's JavaScript!");
//Accessing and storing the user input in variables
function enterTxt() {
    var bgColor = document.getElementById("chooseColor").value;
    let userTxt = document.getElementById("userTxt").value;
    let color = document.getElementById("chooseTxtColor").value;
    let dispTxt = document.getElementById("displayTxt");
    var divAlert = document.getElementById("danger");
    var alertPara = document.getElementById("alertPara");
//if-else statements
    if (bgColor == "" && color == "" && userTxt == "") {
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input anything!";
    }
    else if (bgColor == "" && color == "") {
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any background color and text-color!";
        dispTxt.innerHTML = userTxt;
    }
    else if (bgColor == "" && userTxt == "") {
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text and background color!";
        document.body.style.color = color;
    }
    else if (color == "" && userTxt == "") {
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text and text-color!";
        document.body.style.backgroundColor = bgColor;
    }
    else if (bgColor == "") {
        document.body.style.color = color;
        dispTxt.innerHTML = userTxt;
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any backround color!";
    }
    else if (userTxt == "") {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = color;
        dispTxt.innerHTML = userTxt;
        dispTxt.innerHTML = '""';
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text!";
    }
    else if (color == "") {
        document.body.style.backgroundColor = bgColor;
        dispTxt.innerHTML = userTxt;
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text-color!";
    }
    else if (bgColor == color) {
        dispTxt.innerHTML = userTxt;
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-warning");
        alertPara.innerHTML = "<strong>Holy Guacamole!</strong> Please input different values for background color and text color or the text of the webpage wouldn't be visible!";
    }
    else {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = color;
        dispTxt.innerHTML = userTxt;
        dispTxt.style.backgroundColor = bgColor;
        divAlert.classList.add("alert");
        divAlert.classList.add("alert-success");
        alertPara.innerHTML = "Changes Successful!";
    }
}
function onInput() {
    var dispTxt = document.getElementById("displayTxt");
    var size = document.getElementById("txtSize").value;
    var textStyle = document.getElementById("txtStyle").value;
    dispTxt.style.fontSize = size + "px";
    dispTxt.style.fontFamily = textStyle;
}
function image() {
    let imgPara = document.getElementById("para");
    var catImg = document.getElementById("img");
    imgPara.innerHTML = "Remove your cursor from over my cat!!😠😠";
    imgPara.style.color = "red";
    imgPara.style.fontSize = "40px";
    catImg.classList.add = "image";
    
}
function imageOver() {
    let imgPara = document.getElementById("para");
    imgPara.innerHTML = "Good!😏😏";
    imgPara.style.fontSize = "40px";
    imgPara.style.color = "green";
}
