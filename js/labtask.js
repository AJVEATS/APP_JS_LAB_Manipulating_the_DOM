/**
 * TASK
 * Declare a function named "changeClass" that accepts two inputs, an id and a class name. 
 * The function should find the element with the given ID attribute, and set the class attribute of that element to the given class. 
 * 
 * @param strID	 	ID of the page element to be found.
 * @param strClass	String containing the name of the class attribute. Set strID class attribute to this value.
 */
 
function changeClass(strID, strClass){
	var element  = document.getElementById(strID);
	element.setAttribute("class",strClass);
	//console.log(element);
}

/**
 * TASK
 * The index page contains an unordered list with an id of "groceries". Within that list the list items have a class attribute 
 * of either "hot" or "cold". Declare a function called "getHotItems", that returns a count of only the "hot" items from the 
 * list.
 *
 * @return 	Count of the nodeListitems/elements where the class attribute = "hot"
 */
 
function getHotItems(){
	var hotItems = document.getElementById("groceries");
	//return the number of items with a class attribute of "hot"
	console.log(hotItems);
	return hotItems.getElementsByClassName("hot").length;
}

/**
 * TASK
 * Declare a function called "swapClass" that swaps the class of items in the groceries list, 
 * so that "hot" items have a class attribute of "cold" and originally "cold" items have a class attribute of "hot".
 */

function swapClass(){
	var listItems = document.getElementsByTagName("li");
	for( var i = 0; i < listItems.length; i++){
		if(listItems[i].className == "hot"){
			listItems[i].className = "cold"
		} else if(listItems[i].className == "cold"){
			listItems[i].className = "hot"
		}
	}
}

/**
 * TASK
 * Declare a function called "appendItem" that takes a list and an item name as parameters. The function should 
 * append a new item with the passed name to the list.
 *
 * @param 	ulPassed	Unordered  list of groceries as a nodeList
 * @param	liPassed	A String, which is the name of the new item to add to the list.
 */

function appendItem(ulPassed, liPassed){

	//1. Create a new element with a tag of "li"
	var newElement = document.createElement("li");
	//2. Create a new text node and give it the name of the item (liPassed)
	var node = document.createTextNode(liPassed);
	//3. Attach the text node to the list item as a childNode of the list item
	newElement.appendChild(node);
	//4. attach the listItem to the List as a childNode of the list
	ulPassed.appendChild(newElement);
}


/**
 * TASK
 * Declare a function called "swapInnerHTML". The function should take each list item and concatenate a 
 * list item number with a "." and a space to the innerHTML of items in the passed list 
 * e.g.  item 2 listed as 'pine nuts'becomes '2. pine nuts'. 
 *
 *@param	ulPassed	Unordered  list of groceries
 */

function swapInnerHTML(ulPassed){
	var items = document.getElementsByTagName("li");
	//console.log(items);
	for(var i = 0; i < items.length; i++){
		var original = items[i].innerHTML
		items[i].innerHTML = (i-7) + ". " + original;
	}
	//console.log(items);
}