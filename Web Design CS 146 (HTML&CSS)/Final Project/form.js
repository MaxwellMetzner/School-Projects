
 function handleFormSubmit(event) {
    event.preventDefault();
    var x = document.getElementById("formUsername").value;
    var y = document.getElementById("formmessage").value;
    addNewPost(x,y);
 }  
 
 function addNewPost(username, message) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', "post");

    let newSpan = document.createElement('span');

    let newImg = document.createElement('p');
    newImg.textContent = 'Message: ' + message;
    
    let innerDiv = document.createElement('div');
    innerDiv.textContent = 'Name: ' + username;
    innerDiv.setAttribute('class', "innerPost");

    newDiv.appendChild(newSpan);
    newDiv.appendChild(innerDiv);
    innerDiv.appendChild(newImg);
    postList.appendChild(newDiv);
    postList.appendChild(document.createElement("br"));
 }
 
 window.onload = () => {
    postForm.addEventListener('submit', handleFormSubmit);
 };