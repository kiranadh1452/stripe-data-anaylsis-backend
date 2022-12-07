const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StripeChargeSchema = new mongoose.Schema({
    id: {
        type: String,
        // required: true,
    },
    charge_id: {
        type: String,
    },
    amount: {
        type: Number,
        // required: true,
    },
    balance_transaction: {
        type: Object,
        // required: true,
    },
    billing_details: {
        address: {
            type: Object,
        },
        email: {
            type: String,
        },
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        shipping: {
            type: Object,
        },
    },
    currency: {
        type: String,
        // required: true,
    },
    customer: {
        type: String,
        // ref: "StripeCustomer",
        // required: true,
    },
    description: {
        type: String,
    },
    disputed: {
        type: Boolean,
    },
    invoice: {
        type: String,
        // ref: "StripeInvoice",
    },
    metadata: {
        type: Object,
    },
    payment_intent: {
        type: String,
    },
    payment_method_details: {
        type: Object,
    },
    receipt_email: {
        type: String,
    },
    refunded: {
        type: Boolean,
    },
    shipping: {
        type: Object,
    },
    statement_descriptor: {
        type: String,
    },
    statement_descriptor_suffix: {
        type: String,
    },
    status: {
        type: String,
    },
    object: {
        type: String,
        // required: true,
    },
    amount_captured: {
        type: Number,
    },
    amount_refunded: {
        type: Number,
    },
    application: {
        type: String,
    },
    application_fee: {
        type: String,
    },
    application_fee_amount: {
        type: Number,
    },
    calculated_statement_descriptor: {
        type: String,
    },
    captured: {
        type: Boolean,
    },
    created: {
        type: Date,
    },
    failure_balance_transaction: {
        type: String,
    },
    failure_code: {
        type: String,
    },
    failure_message: {
        type: String,
    },
    fraud_details: {
        type: Object,
    },
    livemode: {
        type: Boolean,
    },
    on_behalf_of: {
        type: String,
    },
    outcome: {
        type: Object,
    },
    paid: {
        type: Boolean,
    },
    payment_method: {
        type: String,
    },
    radar_options: {
        type: Object,
    },
    receipt_number: {
        type: String,
    },
    receipt_url: {
        type: String,
    },
    refunds: {
        type: Object,
    },
    review: {
        type: String,
    },
    source_transfer: {
        type: String,
    },
    transfer: {
        type: String,
    },
    transfer_data: {
        type: Object,
    },
    transfer_group: {
        type: String,
    },
});

module.exports = mongoose.model("StripeCharge", StripeChargeSchema);
