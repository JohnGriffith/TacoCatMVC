/*
// Coder Foundry Code
const startBtn = document.getElementById('dromeBtn');

startBtn.addEventListener('click', palindromeCheck)

function palindromeCheck(){
    retrieveInput();
};

function retrieveInput() {
    //get user string for the page
    const userIn = document.getElementById('userInput').value;
    
    //check for palindrome
    let returnObj = checkForPalindrome(userIn);

    //display out message to the screen
    displayMessage(returnObj);
};

function checkForPalindrome(userString){
    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,'');

    let revString = [];
    let returnObj = {};

    for(let i = userString.length - 1; i >= 0; i--){
        revString += userString[i];
    };

    if (revString === userString){
        returnObj.msg = 'Well Done! You Entered a Palindrome!'
    } else {
        returnObj.msg = 'Sorry! You did not enter a Palindrome!'
    };

    returnObj.reversed = revString;

    return returnObj;
}

function displayMessage(returnObj){
    document.getElementById('alertHeader').innerHTML = returnObj.msg;
    document.getElementById('yesMsg').innerHTML = `Your phrase revered is ${returnObj.reversed}.`;
    document.getElementById('yesAlert').classList.remove('invisible');
}*/

/* My original code
// Retrive User Input
// Remove invalid data (spaces, special characters, numbers)
// Reverse the Input
// Compare Reverse to Original
// Display either success or failure to the user

const startBtn = document.getElementById('dromeBtn');

startBtn.addEventListener('click', palindromeCheck)

function palindromeCheck(){
    retrieveInput();
};

function retrieveInput() {
    const userIn = document.getElementById('userInput').value;
    if(!userIn){
        alert("Please enter a value to be evaluated.");
        userIn.innerText = '';
    } else {  
        let validWord = validateWord(userIn);
        displayResult(validWord);
    };
};

function validateWord(userIn) {
    let enterWord = userIn.trim().split(" ").join("").toLowerCase();
    let firstRun = [];
    let validWord = [];

    for (let char of enterWord){
        firstRun += char.replace(/\W/,'');
    };
    for(let char of firstRun){
        validWord += char.replace(/\d/,'');
    };

    return validWord;  
};

function displayResult(validWord){
    let success = document.getElementById('yesAlert')
    let failed = document.getElementById('noAlert')
    let yesMsg = document.getElementById('yesMsg')
    let noMsg = document.getElementById('noMsg')
    let reverseWord = [];

    for(let i = validWord.length-1; i >= 0; i--){
        reverseWord += validWord[i];
    };

    if (validWord === reverseWord)
    {
        success.classList.toggle('invisible')
        failed.classList.add('invisible')
        yesMsg.innerHTML =`<strong>${validWord}</strong> is the same forwards and backwards: <strong>${reverseWord}</strong>.`
    } else {
        failed.classList.toggle('invisible')
        success.classList.add('invisible')
        noMsg.innerHTML =`<strong>${validWord}</strong> is not the same forwards and backwards: <strong>${reverseWord}</strong>.`
    };
}; */