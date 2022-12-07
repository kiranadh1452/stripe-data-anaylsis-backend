const { check, validationResult } = require("express-validator");

/**
 * description: Function to validate that the data is non-empty
 * Usecase: When all the data sent in the request are needed to be non-empty
 * @param {Array} data - Array of data to be validated
 * @returns {Array} - Array of validation results
 */
const nonEmptyDataValidation = (dataArray) => {
    try {
        const validations = [];
        dataArray.forEach((data) => {
            validations.push(check(data).not().isEmpty());
        });
        return validations;
    } catch (error) {
        return [new Error(error)];
    }
};

/**
 * description: Function to validate that the data is in valid format
 * Usecase: When all the data sent in the request are needed to be of valid format (empty format is allowed)
 * @param {Array} data - Array of data to be validated
 * @returns {Array} - Array of validation results
 */
const dataFormatValidation = (dataArray) => {
    try {
        const validations = [];
        dataArray.forEach((data) => {
            switch (data) {
                case "reporting_range":
                    validations.push(
                        check(data)
                            .isIn(["daily", "monthly", "annually"])
                            // .optional()
                    );
                    break;

                case "start_date":
                    validations.push(check(data).optional().isISO8601());
                    break;

                case "end_date":
                    validations.push(check(data).optional().isISO8601());
                    break;

                default:
                    console.error(`No validation for data: ${data}`);
                    break;
            }
        });
        return validations;
    } catch (error) {
        return [new Error(error)];
    }
};

/**
 * description: Function to validate that the data is non-empty and of valid format
 * Usecase: When all the data sent in the request are needed to be non-empty and of valid format
 * @param {Array} data - Array of data to be validated
 * @returns {Array} - Array of validation results
 */
const nonEmptyPlusDataFormatValidation = (dataArray) => {
    const nonEmptyDataValidationArray = nonEmptyDataValidation(dataArray);
    const dataFormatValidationArray = dataFormatValidation(dataArray);
    return [...nonEmptyDataValidationArray, ...dataFormatValidationArray];
};

/**
 * description: Function to handle the validation results
 */
const validationResultHandler = (req, res, next) => {
    try {
        let errorLists = validationResult(req);
        if (errorLists.isEmpty()) {
            return next();
        }
        return res.status(422).json({
            message: "Invalid data format",
            errors: errorLists.array()[0],
        });
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong",
            error: error,
        });
    }
};

module.exports = {
    dataFormatValidation,
    nonEmptyDataValidation,
    validationResultHandler,
    nonEmptyPlusDataFormatValidation,
};
