const express = require("express");

// middlewares
const {
    nonEmptyPlusDataFormatValidation,
    validationResultHandler,
    dataFormatValidation,
} = require("../middleware/dataFormatValidation.js");

// controllers

// configuration and constants

let router = express.Router();

/** --------------------------------------------------------------------------------------------------------
 *                                              Routes
----------------------------------------------------------------------------------------------------------*/

router.get(
    "/report",
    nonEmptyPlusDataFormatValidation(["reporting_range"]),
    dataFormatValidation(["start_date", "end_date"]), // these are optional params
    validationResultHandler
);

module.exports = router;
