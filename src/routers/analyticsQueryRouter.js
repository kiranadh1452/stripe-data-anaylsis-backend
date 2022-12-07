const express = require("express");

// middlewares
const {
    nonEmptyPlusDataFormatValidation,
    validationResultHandler,
    dataFormatValidation,
} = require("../middleware/dataFormatValidation.js");

// controllers
const getReportingDataController = require("../controllers/getReportingDataController.js");

// configuration and constants

let router = express.Router();

/** --------------------------------------------------------------------------------------------------------
 *                                              Routes
----------------------------------------------------------------------------------------------------------*/

router.get(
    "/report",
    nonEmptyPlusDataFormatValidation(["reporting_range"]),
    dataFormatValidation(["start_date", "end_date"]), // these are optional params
    validationResultHandler,
    getReportingDataController
);

module.exports = router;
