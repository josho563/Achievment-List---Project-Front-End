"use strict";

//Create
const getOutput = document.querySelector("#Output");
document.querySelector("#UserForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const form = this;
    const data = {
    achivementName: form.name.value,
    achievementDescription: form.name.value, 
    achievementValue: form.name.value,
    achievementUnlocked: form.name.value,
};
console.log("DATA: ", data);
form.reset();
console.log("Hello");
});

// axios.post("http://localhost:8080/create", data)
// .then(res => console.log(res))
// .catch(err => console.error(err));
//     })
//         .catch(err => console.error(err));

