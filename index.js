/* Enter the code to remove the main node element under this comment */

main.remove()

/* Create your new element here and assign it to newHeader */
const newHeader = null;

var h1 = document.createElement('h1')

document.body.appendChild(h1)

h1.id = 'victory'

var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
