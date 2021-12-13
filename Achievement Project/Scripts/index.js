"use strict";

//Create
const getOutput = document.querySelector("#Output");
document.querySelector("#UserForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const form = this;
    const data = {
    achivementName: form.achievementName.value, 
    achievementDescription: form.achievementDescription.value, 
    achievementValue: form.achievementValue.value,
    achievementUnlocked: form.achievementUnlocked.value,
};
console.log("DATA: ", data);
form.reset();
console.log("Hello");
});


