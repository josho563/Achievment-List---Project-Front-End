"use strict";

//Create
const Create = document.querySelector("#Output");
document.querySelector("#UserForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const form = this;
    const data = {
    achivementName: form.achievementName.value, 
    achievementDescription: form.achievementDescription.value, 
    achievementValue: form.achievementValue.value,
    achievementUnlocked: form.achievementUnlocked.checked,
};
console.log("DATA: ", data);
form.reset();
console.log("Hello");
});

//Update
const Update = document.querySelector("#Output");
document.querySelector("#UserForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const form = this;
    const data = {
    achivementName: form.achievementName.value, 
    achievementDescription: form.achievementDescription.value, 
    achievementValue: form.achievementValue.value,
    achievementUnlocked: form.achievementUnlocked.checked,
};
console.log("DATA: ", data);
form.reset();
console.log("Hello");
});


//Read
const getOutput = document.querySelector("#getOutput").addEventListener("submit", function (event)
{ getOutput => {
const achievements = [achievementName, achievementDescription, achievementValue, achievementUnlocked];

for (let achievement of achievements) {
    console.log(achievement);
    const achievContainer = document.createElement("div");
    const achievementName = document.createElement("p");
    achievementName.innerText = `Name: ${achievement.achievementName}`;
    achievContainer.appendChild(achievementName);

    const achievementDescription = document.createElement("p");
    achievementDescription.innerText = `Description: ${achievement.achievementDescription}`;
    achievContainer.appendChild(achievementDescription);

    const achievementValue = document.createElement("p");
    achievementValue.innerText = `Value: ${achievement.achievementValue}`;
    achievContainer.appendChild(achievementValue);

    const achievementUnlocked = document.createElement("p");
    achievementUnlocked.innerText = `Unlocked: ${achievement.achievementUnlocked}`;
    achievContainer.appendChild(achievementUnlocked);

    getOutput.appendChild(achievContainer);
};
}
})
