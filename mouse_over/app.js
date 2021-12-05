mydiv = document.getElementById("mydiv");
mydiv.addEventListener("mouseover",myfunc1);
mydiv.addEventListener("mouseout",myfunc2);
function myfunc1(){
    document.getElementById("js").src="js.png";
    document.getElementById("s1").innerHTML="Javascript is a dynamic computer programming language.<br> It is lightweight and most commonly used as a part of <br>web pages, whose implementations allow client-side script to<br> interact with the user and make dynamic pages. <br>It is an interpretedprogramming language with object-oriented capabilities.";
}
function myfunc2(){
    document.getElementById("js").src="html.png";
    document.getElementById("s1").innerHTML="The HyperText Markup Language,<br> or HTML is the standard markup language for documents<br> designed to be displayed in a web browser.";
}
