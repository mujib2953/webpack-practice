const errorBox = document.getElementById("error");
const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const addValuesButton = document.getElementById("addValues");
const resultDiv = document.getElementById("result");

const hideError = () => {
    errorBox.classList.add("invisible");
}

const showError = (errorMessage) => {
    errorBox.innerText = errorMessage;
    errorBox.classList.remove("invisible");
}

const parseInputs = (...inputs) => {
    return inputs.map(str => parseInt(str));
}

const inputsAreValid = (...inputs) => {
    return inputs.every(num => typeof num === "number" && !isNaN(num));
}

const handleAdditionError = (inputs, numbers) => {
    const fullMessage = inputs.reduce((message, str, index) => {
        if (inputsAreValid(numbers[index])) {
            return message + "";
        } else {
            return message + `${str} is not a number.`;
        }
    }, "Please enter two valid numbers!! ");

    showError(fullMessage);
}

addValuesButton.addEventListener("click", () => {
    hideError();

    const inputs = [numberOneInput.value, numberTwoInput.value];
    const parsedInputs = parseInputs(...inputs);

    if (inputsAreValid(...parsedInputs)) {
        const [num1, num2] = parsedInputs;

        resultDiv.innerText = num1 + num2;
    } else {
        resultDiv.innerText = "";
        handleAdditionError(inputs, parsedInputs);
    }

}, false);
hideError();
