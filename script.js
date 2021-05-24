alert("Welcome! This webpage can change its color to anything you want! No, it's not magic, it's JavaScript!");
let dispTxt = document.getElementById("displayTxt");
   //Accessing and storing the user input in variables
function enterTxt() {
   let bgColor = document.getElementById("chooseColor").value;
   let userTxt = document.getElementById("userTxt").value;
   let color = document.getElementById("chooseTxtColor").value;
   let divAlert = document.getElementById("danger");
   let alertPara = document.getElementById("alertPara");
   //if-else statements
   if (bgColor == "" && color == "" && userTxt == "") {
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input anything!";
   } else if (bgColor == "" && color == "") {
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any background color and text-color!";
   dispTxt.innerHTML = userTxt;
   } else if (bgColor == "" && userTxt == "") {
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text and background color!";
   document.body.style.color = color;
   } else if (color == "" && userTxt == "") {
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text and text-color!";
   document.body.style.backgroundColor = bgColor;
   } else if (bgColor == color && userTxt == "") {
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text!";
   } else if (bgColor == "") {
   document.body.style.color = color;
   dispTxt.innerHTML = userTxt;
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any backround color!";
   } else if (userTxt == "") {
   document.body.style.backgroundColor = bgColor;
   document.body.style.color = color;
   dispTxt.innerHTML = userTxt;
   dispTxt.innerHTML = '""';
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text! ";
   } else if (color == "") {
   document.body.style.backgroundColor = bgColor;
   dispTxt.innerHTML = userTxt;
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
   alertPara.innerHTML = "<strong>Holy Guacamole!</strong> It seems you didn't input any text-color!";
   } else if (bgColor == color) {
   dispTxt.innerHTML = userTxt;
   divAlert.classList.add("alert");
   divAlert.classList.add("alert-warning");
    alertPara.innerHTML = "<strong>Holy Guacamole!</strong> Please input different values for background color and text color or the text of the webpage wouldn't be visible!";
   } else {
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
   let dropdown = document.getElementById("dropdown").value;
   dispTxt.style.fontFamily = dropdown;
   let size = document.getElementById("txtSize").value;
   dispTxt.style.fontSize = size +"px";
}
function image() {
   let imgPara = document.getElementById("para");
   let catImg = document.getElementById("img");
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
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var underline = document.getElementById("unline");
bold.onchange = () => {
   switch (bold.checked) {
      case true:
         dispTxt.style.fontWeight = "bold";
         break;
      default:
         dispTxt.style.fontWeight = "normal";
         break;
   }
}
italic.onchange = () => {
   switch (italic.checked) {
      case true:
         dispTxt.style.fontStyle = "italic";
         break;
      default:
         dispTxt.style.fontStyle = "normal";
         break;
   }
}
underline.onchange = () => {
   switch (underline.checked) {
      case true:
         dispTxt.style.textDecoration = "underline";
         break;
      default:
         dispTxt.style.textDecoration = "none";
         break;
   }
}
new TypeIt("#typed", {
   loop: true,
   speed: 100,
   waitUntilVisible: true
   })
   .type("The Webpage that changes color")
   .pause(1000)
   .delete(30)
   .type("Change the col")
   .pause(100)
   .delete(3)
   .type("background color")
   .pause(1000)
   .delete(16)
   .type("text color")
   .pause(1000)
   .delete(10)
   .type("font size")
   .pause(1000)
   .delete(9)
   .type("<em>font style</em>")
   .pause(1000)
   .delete(10)
   .type("<strong>world!<strong>")
   .pause(1000)
   .go();
    