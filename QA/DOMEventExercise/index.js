"use strict"; 
const counter = document.querySelector("input#number1");
const output = document.querySelector("section#history");
const counter = document.querySelector("input#calnumber1");
const counter = document.querySelector("input#calnumber2");


const reset = () => {
  counter.value = 0;
}

const plus1 = () => {
        const current = counter.value 
        console.log("CURR:", current);

        const newValue = Number.parseInt(current) + 1;
        console.log("NEW:", newValue)

        counter.value = newValue
        const newHistory = document.createElement("p");
        newHistory.innerText = `${current} +1 = ${newValue}`;
        output.appendChild(newHistory);
    }

const minus1 = () => {
        const current = counter.value 
        console.log("CURR:", current);

        const newValue = Number.parseInt(current) - 1;
        console.log("NEW:", newValue)

        counter.value = newValue
        const newHistory = document.createElement("p");
        newHistory.innerText = `${current} -1 = ${newValue}`;
        output.appendChild(newHistory);
    }

const plus5 = () => {
        const current = counter.value 
        console.log("CURR:", current);

        const newValue = Number.parseInt(current) + 5;
        console.log("NEW:", newValue)

        counter.value = newValue
        const newHistory = document.createElement("p");
        newHistory.innerText = `${current} +5 = ${newValue}`;
        output.appendChild(newHistory);
    }

const minus5 = () => {
        const current = counter.value 
        console.log("CURR:", current);

        const newValue = Number.parseInt(current) + 5;
        console.log("NEW:", newValue)

        counter.value = newValue
        const newHistory = document.createElement("p");
        newHistory.innerText = `${current} -5 = ${newValue}`;
        output.appendChild(newHistory);
    }

const plus10 = () => {
        const current = counter.value 
        console.log("CURR:", current);

        const newValue = Number.parseInt(current) + 10;
        console.log("NEW:", newValue)

        counter.value = newValue
        const newHistory = document.createElement("p");
        newHistory.innerText = `${current} +10 = ${newValue}`;
        output.appendChild(newHistory);
    }

    const minus10 = () => {
        const current = counter.value 
        console.log("CURR:", current);

        const newValue = Number.parseInt(current) - 10;
        console.log("NEW:", newValue)

        counter.value = newValue
        const newHistory = document.createElement("p");
        newHistory.innerText = `${current} -10 = ${newValue}`;
        output.appendChild(newHistory);
    }
    document.querySelector(`#+`).addEventListener("click", addition)
    const addition = () => {
        const current counter.value
        function Math (num1, num2) {
        return num1-num2
}

