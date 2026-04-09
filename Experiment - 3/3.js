let newheading = document.getElementById("heading")
newheading.textContent = "DOM Manipulation in JavaScript";
newheading.style.color = "red";
newheading.style.fontSize = "30px";

let paragraphs = document.getElementsByClassName("paragraph")
paragraphs[0].innerHTML="<strong>This is a simple paragraph to demonstrate DOM manipulation.</strong>"
paragraphs[0].style.color = "green";
paragraphs[0].style.fontSize = "20px";

let pargraaphsByTag = document.getElementsByTagName("p")    
pargraaphsByTag[1].textContent = "This is another paragraph selected by tag name.";
pargraaphsByTag[1].style.color = "blue";
pargraaphsByTag[1].style.fontSize = "18px";     
