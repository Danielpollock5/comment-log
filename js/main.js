var username = document.getElementById('userName')
var textArea = document.getElementById('comment')

function getInfo(){
	var userInput = username.value
	var userComment = textArea.value
	//this will create the username:'...' textnode
	var textName = document.createTextNode("Username: " + userInput)
	var comment = document.createTextNode("Comment: " + userComment)
	
	//this will create a list item element. its the bottom list thingy on the page
	var newDiv = document.createElement('div')
	newDiv.id = 'div'
	//the Header for the list div
	var newUserName = document.createElement('h3')
	//this should put the input in this new element ive created above
	newUserName.appendChild(textName)
	//the comment section
	var newComment = document.createElement('p')
	//this should put the comment in the new div
	newComment.appendChild(comment)

	newDiv.appendChild(newUserName)
	newDiv.appendChild(newComment)
	document.getElementById('div').appendChild(newDiv)


}
textArea.addEventListener("keypress", function(e) {
    if (e.keyCode == 13 && username.value !== '' && textArea.value !== undefined) {
        getInfo();
        return;
    }
    else {
    	 //alert('Please enter your username, or a comment.')
    	// console.log(e.keyCode)
    }
});

