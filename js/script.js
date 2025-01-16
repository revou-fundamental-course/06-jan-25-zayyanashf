// Ini File Javascript

function formValidation() {
    let valid = true;

    let nameInput = document.getElementById('name-input').value;
    console.log(nameInput);
    if (nameInput == ""){
        alert('Name must be filled out');
        valid = false;
    }   
    
    let birthdateInput = document.getElementById('birthdate-input').value;
    console.log(birthdateInput);
    if (birthdateInput == ""){
        alert('Birthdate must be filled out');
        valid = false;
    }     

    let genderInputMale = document.getElementById('gender-input-male').checked;
    let genderInputFemale = document.getElementById('gender-input-female').checked;
    if (!genderInputMale && !genderInputFemale){
        alert('Gender must be filled out');
        valid = false;
    }   
    
    let messageInput = document.getElementById('message-input').value;
    if (messageInput == ""){
        alert('Message must be filled out');
        valid = false;
    }     

    if  (valid) {
        document.getElementById('result-form-name').innerHTML = nameInput;
        document.getElementById('result-form-birthdate').innerHTML = birthdateInput;
        document.getElementById('result-form-gender').textContent = genderInputMale ? "Male" : "Female"
        document.getElementById('result-form-message').innerHTML = messageInput;      
    }
}

document.getElementById('submit-btn').addEventListener('click', formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner += 1; // bacanya indexBanner + 1

    changeBackground();
}


// function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');

    if (indexBanner > bannerList.length - 1) {
        //  reset indexbanner
        indexBanner = 0;
    }

    // Looping to change background
    for (let i = 0; i < bannerList.length; i++) {
        // console.log[i];
        // console.log[bannerList[i]];
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);