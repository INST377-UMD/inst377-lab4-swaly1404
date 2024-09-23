let isBlue = true;

function alertMe() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert('Please enter a name.');
    }
}

function changeColor() {
    const body = document.body;
    if (body.style.backgroundColor === 'rgb(144, 238, 144)') {
        body.style.backgroundColor = '#ADD8E6';
    } else {
        body.style.backgroundColor = '#90EE90';
    }
}

function validateText() {
    const text = document.getElementById('textInput').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(text)) {
        alert('The text contains special characters.');
    } else {
        alert('The text does not contain any special characters.');
    }
}

function addText() {
    const heading = document.getElementById('pageHeading');
    heading.textContent += ' Add Text';
}