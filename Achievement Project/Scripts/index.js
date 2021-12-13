"use strict";

//Create
const getOutput = document.querySelector("#Output");
document.querySelector("#UserForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const form = this;

    const data = {
    achivementName: form.name.value,
    description: form.name.value, 
    achievementValue: form.name.value,
    achievementUnlocked: form.name.value,


};
console.log("DATA: ", data);
form.reset();
form.userId.focus();
});