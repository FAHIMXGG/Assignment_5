//hover function
function setHoverEffect(elementId) {
    // Get the element
    var myElement = document.getElementById(elementId);
  
    // Add event listeners for mouse enter and leave
    myElement.addEventListener("mouseenter", function() {
      // Generate a random color
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      // Set the hover color
      myElement.style.backgroundColor = "#" + randomColor;
    });
  
    myElement.addEventListener("mouseleave", function() {
      // Remove the hover color
      myElement.style.backgroundColor = "";
    });
  }
  
  // Call the function for each element
  setHoverEffect("hover1");
  setHoverEffect("hover2");
  setHoverEffect("hover3");
  setHoverEffect("hover4");
  setHoverEffect("hover5");
  setHoverEffect("hover6");
  setHoverEffect("hover7");
  setHoverEffect("hover8");


// // Get the element
// var myElement1 = document.getElementById("hover1");

// // Add event listeners for mouse enter and leave
// myElement1.addEventListener("mouseenter", function() {
//   // Generate a random color
//   var randomColor = Math.floor(Math.random()*16777215).toString(16);
//   // Set the hover color
//   myElement1.style.backgroundColor = "#" + randomColor;
// });

// myElement1.addEventListener("mouseleave", function() {
//   // Remove the hover color
//   myElement1.style.backgroundColor = "";
// });

// var myElement2 = document.getElementById("hover2");

// myElement2.addEventListener("mouseenter", function() {
//   var randomColor = Math.floor(Math.random()*16777215).toString(16);
//   myElement2.style.backgroundColor = "#" + randomColor;
// });

// myElement2.addEventListener("mouseleave", function() {
//   myElement2.style.backgroundColor = "";
// });

// var myElement3 = document.getElementById("hover3");

// myElement3.addEventListener("mouseenter", function() {
//   var randomColor = Math.floor(Math.random()*16777215).toString(16);
//   myElement3.style.backgroundColor = "#" + randomColor;
// });

// myElement3.addEventListener("mouseleave", function() {
//   myElement3.style.backgroundColor = "";
// });



  