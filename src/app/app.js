const alertService = new AlertService();
const componentService = new ComponentService();

const run = (alertService, componentService) => {
    alertService.hideError();

    componentService.onClick(() => {
        alertService.hideError();

        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);

        if (inputsAreValid(...parsedInputs)) {
            const [num1, num2] = parsedInputs;
            componentService.setResult(num1 + num2);
        } else {
            componentService.setResult("");
            alertService.handleAdditionError(inputs, parsedInputs);
        }
    });
}
