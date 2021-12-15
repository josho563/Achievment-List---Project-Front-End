"use strict";
const promisesPromises = new Promise((resolve, reject) => {

    const onSuccess = res => console.log("Success", res);
    const onFailure = err => console.log("Failure", res);
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
            form.achievementName.focus();
            window.alert("Delete Success")
        })
});