"use strict";
const promisesPromises = new Promise((resolve, reject) => {

    const onSuccess = res => console.log("Success", res);
    const onFailure = err => console.log("Failure", res);
});

//Update
const Update = document.querySelector("#Output");
document.querySelector("#updateForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const data = {
        achievementId: (form.achievementId.value),
        achievementName: form.achievementName.value,
        achievementDescription: form.achievementDescription.value,
        achievementValue: form.achievementValue.value,
        achievementUnlocked: form.achievementUnlocked.checked,
    };
    console.log("DATA: ", data);
    axios.put(`http://localhost:8080/replace/${form.achievementId.value}` ,data)
    // ${data.achievementId}`)
        .then(res => {
        form.reset();
        form.achievementName.focus();
        })
        .catch(err => console.error(err));
        window.alert("Update Success")
});
