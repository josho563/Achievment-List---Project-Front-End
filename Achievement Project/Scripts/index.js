"use strict";

//Read All
const getOutput = document.querySelector("#getOutput").addEventListener("submit", function (event) {
axios
    .get("http://localhost:8080/getall")
    .then(res => {
        console.log(res)
        const achievements = res.data
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
axios.post(`http://localhost:8080/replace/${name}`, data)
.then(res => console.log(res))
.catch(err => console.error(err));
    })
        .catch(err => console.error(err));

console.log("DATA: ", data);
form.reset();
console.log("Hello");
});

//delete
document.querySelector("#deleteForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const achievementName = form.achievementName.value;
    axios
        .delete(`http://localhost:8080/remove/${achievementName}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.userId.focus();
        })
})

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

axios.post("`http://localhost:8080/create", data)
.then(res => console.log(res))
.catch(err => console.error(err));
    })
        .catch(err => console.error(err));
