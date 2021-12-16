"use strict";
const promisesPromises = new Promise((resolve, reject) => {

    const onSuccess = res => console.log("Success", res);
    const onFailure = err => console.log("Failure", res);
});

//Create
const Create = document.querySelector("#Output");
document.querySelector("#createForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const data = {
        achievementName: form.achievementName.value,
        achievementDescription: form.achievementDescription.value,
        achievementValue: form.achievementValue.value,
        achievementUnlocked: form.achievementUnlocked.checked,
    };
    console.log("DATA: ", data);
    form.reset();
    form.achievementName.focus();
    console.log("Hello");

    axios.post("http://localhost:8080/create", data)
        .then(res => console.log(res))
        .catch(err => console.error(err));
    window.alert("Create Success")
})