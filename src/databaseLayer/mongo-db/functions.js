// import the models
const StripeBalanceTxn = require("./models/balanceTransactionSchema");

const connectToDatabase = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Error in connecting to database: " + error);
    }
};

const getAnalyticsFromBalanceTransaction = async (options) => {
    try {
        const { startDate, endDate, reporting_range } = options;

        const format = formatGenerator(reporting_range);

        // setting the format correctly based on reporting range

        const reportData = await StripeBalanceTxn.aggregate([
            {
                $match: {
                    created: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                },
            },
            {
                $group: {
                    _id: {
                        reporting_category: "$reporting_category",
                        created: {
                            $dateToString: {
                                format,
                                date: {
                                    $toDate: {
                                        $multiply: ["$created", 1000],
                                    },
                                },
                            },
                        },
                    },
                    totalNet: { $sum: "$net" },
                    totalAmount: { $sum: "$amount" },
                },
            },
        ]);

        return reportData;
    } catch (error) {
        throw new Error("Error in getAnalyticsFromBalanceTransaction" + error);
    }
};

const formatGenerator = (reporting_range) => {
    let format = undefined;
    switch (reporting_range) {
        case "daily":
            format = "%Y-%m-%d";
            break;

        case "monthly":
            format = "%Y-%m";
            break;

        case "annually":
            format = "%Y";
            break;

        default:
            console.error(`No format for reporting_range: ${reporting_range}`);
            break;
    }

    return format;
};

module.exports = {
    connectToDatabase,
    getAnalyticsFromBalanceTransaction,
};
