const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StripeCustomerSchema = new mongoose.Schema({
    id: {
        type: String,
        // required: true,
    },
    customer_id: {
        type: String,
    },
    object: {
        type: String,
        // required: true,
    },
    address: {
        type: Object,
    },
    balance: {
        type: Number,
    },
    cash_balance: {
        type: Number,
    },
    created: {
        type: Date,
    },
    currency: {
        type: String,
    },
    default_source: {
        type: Object,
    },
    delinquent: {
        type: Boolean,
    },
    description: {
        type: String,
    },
    discount: {
        type: Object,
    },
    email: {
        type: String,
    },
    invoice_credit_balance: {
        type: Object,
    },
    invoice_prefix: {
        type: String,
    },
    invoice_settings: {
        type: Object,
    },
    livemode: {
        type: Boolean,
    },
    metadata: {
        type: Object,
    },
    name: {
        type: String,
    },
    next_invoice_sequence: {
        type: Number,
    },
    phone: {
        type: String,
    },
    preferred_locales: {
        type: [String],
    },
    sources: {
        type: Object,
    },
    shipping: {
        type: Object,
    },
    tax_exempt: {
        type: String,
    },
    subscriptions: [
        {
            type: String,
            // ref: "StripeSubscription",
        },
    ],
    test_clock: {
        type: Date,
    },
});

module.exports = mongoose.model("StripeCustomer", StripeCustomerSchema);
