"use strict";
const promisesPromises = new Promise((resolve, reject) => {

    const onSuccess = res => console.log("Success", res);
    const onFailure = err => console.log("Failure", res);
});

//Read All
const getOutput = document.querySelector("#getOutput")
axios
    .get("http://localhost:8080/getAll")
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
        }
    })

