// import database functions from the database layer
const databasePicker = require("../databaseLayer/databaseFunc");
const db = databasePicker();

const getReportingDataController = async (req, res) => {
    try {
        const { reporting_range, start_date, end_date } = req.query;

        const startDate = start_date
            ? new Date(start_date).valueOf() / 1000
            : undefined;
        const endDate = end_date
            ? new Date(end_date).valueOf() / 1000
            : undefined;

        const reportData = await db.getAnalyticsFromBalanceTransaction({
            startDate,
            endDate,
            reporting_range,
        });

        res.status(200).json({
            status: "success",
            data: reportData,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

module.exports = getReportingDataController;
