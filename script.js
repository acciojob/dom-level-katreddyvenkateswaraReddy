//your JS code here. If required.
var element = document.getElementById('level');

  // Calculate the DOM level
  var domLevel = 0;
  var currentElement = element;
  while (currentElement.parentNode) {
    domLevel++;
    currentElement = currentElement.parentNode;
  }


  // Display the final answer using alert()
  alert('The level of the element is: ' + domLevel);