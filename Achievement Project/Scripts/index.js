"use strict";

//Read
const Output = document.querySelector("#getOutput");
getOutput => {
const achievements = res.getOutput

for (let achievement of achievements) {
    console.log(achievement);
    const AchievContainer = document.createElement("div");
    const achievementName = document.createElement("p");
    achievementName.innerText = `Name: ${achievement.achievementName}`;
    AchievContainer.appendChild(achievementName);

    const achievementDescription = document.createElement("p");
    achievementDescription.innerText = `Description: ${achievement.achievementDescription}`;
    AchievContainer.appendChild(achievementDescription);

    const achievementValue = document.createElement("p");
    achievementValue.innerText = `Value: ${achievement.achievementValue}`;
    AchievContainer.appendChild(achievementValue);

    const achievementUnlocked = document.createElement("p");
    achievementUnlocked.innerText = `Unlocked: ${achievement.achievementUnlocked}`;
    AchievContainer.appendChild(achievementUnlocked);

    getOutput.appendChild(AchievContainer);
}
}


//Create
const getOutput = document.querySelector("#Output");
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