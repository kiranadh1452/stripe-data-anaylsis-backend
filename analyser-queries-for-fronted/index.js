/**
 * description: This reformats the data to a more readable format
 * 
const fs = require("fs");
const dataArrayJSON = require("./monthly/typeBasedData.json");

const reducerFunc = (acc, curr) => {
    if (!acc[curr._id.created]) acc[curr._id.created] = [];
    acc[curr._id.created].push(curr);
    return acc;
};
const analyseDate = (dataArray = dataArrayJSON) => {
    const data = dataArray.reduce(reducerFunc, {});
    return data;
};

const ans = analyseDate();
console.log(ans);
fs.writeFileSync("ans.json", JSON.stringify(ans));
*
*/

const monthlySortedData = require("./ans.json");

// const novData = monthlySortedData["2022-10"];

const getValuableInfo = (data = novData) => {
    // charge, refund, dispute (adjustment )
    const refundItem = data.find((item) => item._id.type === "refund");
    const chargeItem = data.find((item) => item._id.type === "charge");
    const disputeItem = data.find((item) => item._id.type === "adjustment");
    const stripeFeaturesFeeItem = data.find(
        (item) => item._id.type === "stripe_fee"
    );

    // analytics data - here, fees are in negative
    if (chargeItem) {
        grossRevenue = chargeItem.totalAmount;
        chargeFees = chargeItem.totalNet - chargeItem.totalAmount;
    }
    if (disputeItem) {
        disputeAmount = disputeItem.totalAmount;
        disputeFees = disputeItem.totalNet - disputeItem.totalAmount;
    }
    if (refundItem) {
        refunds = refundItem.totalAmount;
    }
    if (stripeFeaturesFeeItem) {
        stripeFeaturesFee = stripeFeaturesFeeItem.totalAmount;
    }

    // const totalAmount = data.reduce((acc, curr) => {
    //     return acc + curr.totalAmount;
    // }, 0);
    // const totalNet = data.reduce((acc, curr) => {
    //     return acc + curr.totalNet;
    // }, 0);

    return {
        // totalAmount: totalAmount / 100,
        // totalNet: totalNet / 100,
        grossRevenue: grossRevenue / 100,
        chargeFees: chargeFees / 100,
        refunds: refunds / 100,
        disputeAmount: disputeAmount / 100,
        disputeFees: disputeFees / 100,
        stripeFeaturesFee: stripeFeaturesFee / 100,
    };
};
// console.log(novData);
// const novDataInfo = getValuableInfo();
// console.log(novDataInfo);

/**
 * description: use this function after the api returns the data
 */
const getInformationArray = (data = monthlySortedData) => {
    const unordered = {};
    for (const key in data) {
        unordered[key] = getValuableInfo(data[key]);
    }

    const ordered = Object.keys(unordered)
        .sort()
        .reduce((obj, key) => {
            obj[key] = unordered[key];
            return obj;
        }, {});

    return ordered;
};

const finalData = getInformationArray();
console.log(finalData);
