const firstName = document.GetElementById('first-name').value

document.getElementById(#submitbutton).addEventListener("submit", function(event)) {
event.prevemtDefault()}

if (firstName.lenght < 1) {
  document.getElementById('name-error').innerText = "Please insert a vlaid fist name"

} else (firstName.lenght > 10) {
  document.getElementById('name-error').innerText = ""
}

// errorMessage.classList.add('error-message');
// errorMessage.innerText = "Please insert a name";
// document.quertSelector('#first-name').appendChild(errorMessage);
//

// const errorMessage = document.createElement('p');
