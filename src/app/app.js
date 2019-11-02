import { parseInputs } from "./utils/parse-inputs";
import { inputsAreValid } from "./utils/inputs-are-valid";

export const run = (alertService, componentService) => {
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
