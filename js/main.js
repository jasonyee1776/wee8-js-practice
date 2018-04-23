// change div background color
var color = document.querySelector(".color");
color.style.backgroundColor = "yellow";



// create a div element
var div = document.createElement("div");
div.id = "#newId";



// create h1 element 
var heading = document.createElement("h1");
heading.textContent = "This is a heading";

// append heading to div
div.appendChild(heading);


// append the newly created h1 element onto the page
document.body.appendChild(heading);


// new div element
var div2 = document.createElement("div");

//give new div an ID
div2.id = "#div2"

// create an h1 element 
var heading2 = document.createElement("h1");

// create text node
var textNode = document.createTextNode("This fucking text node right here is in the goddamn h1... IN the goddamn div!");
//append text node to h1 element 
heading2.appendChild(textNode);
//add bootstrap and animate.css classes to heading 
heading2.classList.add("w-50", "mx-auto", "animated", "bounce")
// append h1 to div
div2.appendChild(heading2);

//append div to document
document.body.appendChild(div2);

// create an image
var img = document.createElement("img");
// add img src
img.src = "img/avengers.jpg";
// style image with Bootstrap classes
img.classList.add("w-auto", "col-sm-12", "img-fluid", "h-auto", "avengers");
//append image to body of document
document.body.appendChild(img);
	



// create a button element
var btn = document.createElement("button");
//give button text
btn.textContent = "Click me";
//add bootstrap classes
btn.classList.add("btn", "btn-primary")
//append button to document
document.body.appendChild(btn);


// function that changes img src when button is clicked
btn.addEventListener("click", function() {
	img.src = "img/not-avengers.jpg";
});


