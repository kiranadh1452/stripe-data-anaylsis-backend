const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StripeBalanceTxnSchema = new mongoose.Schema({
    id: {
        type: String,
        // required: true,
    },
    balance_transaction_id: {
        type: String,
        // required: true,
    },
    amount: {
        type: Number,
        // required: true,
    },
    currency: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
    },
    fee: {
        type: Number,
        // required: true,
    },
    fee_details: [
        {
            amount: {
                type: Number,
                // required: true,
            },
            application: {
                type: String,
            },
            currency: {
                type: String,
                // required: true,
            },
            description: {
                type: String,
                // required: true,
            },
            type: {
                type: String,
                // required: true,
            },
        },
    ],
    net: {
        type: Number,
        // required: true,
    },
    source: {
        type: Object,
        // required: true,
    },
    status: {
        type: String,
        // required: true,
    },
    type: {
        type: String,
        // required: true,
    },
    object: {
        type: String,
        // required: true,
    },
    available_on: {
        type: Date,
        // required: true,
    },
    created: {
        type: Number,
        // required: true,
    },
    exchange_rate: {
        type: Number,
    },
    reporting_category: {
        type: String,
        // required: true,
    },
});

module.exports = mongoose.model("StripeBalanceTxn", StripeBalanceTxnSchema);
