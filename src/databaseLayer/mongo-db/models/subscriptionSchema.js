const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StripeSubscriptionSchema = new mongoose.Schema({
    id: {
        type: String,
        // required: true,
    },
    subscription_id: {
        type: String,
    },
    object: {
        type: String,
        // required: true,
    },
    application: {
        type: String,
    },
    application_fee_percent: {
        type: Number,
    },
    automatic_tax: {
        enabled: {
            type: Boolean,
        },
    },
    billing_cycle_anchor: {
        type: Date,
        // required: true,
    },
    billing_thresholds: {
        type: Object,
    },
    cancel_at: {
        type: Date,
    },
    cancel_at_period_end: {
        type: Boolean,
        // required: true,
    },
    canceled_at: {
        type: Date,
    },
    collection_method: {
        type: String,
        // required: true,
    },
    created: {
        type: Date,
        // required: true,
    },
    currency: {
        type: String,
        // required: true,
    },
    current_period_end: {
        type: Date,
        // required: true,
    },
    current_period_start: {
        type: Date,
        // required: true,
    },
    customer: {
        type: String,
        // ref: "StripeCustomer",
        // required: true,
    },
    days_until_due: {
        type: Number,
    },
    default_payment_method: {
        type: String,
        // required: true,
    },
    default_source: {
        type: String,
    },
    default_tax_rates: [{ type: Object }],
    description: {
        type: String,
    },
    discount: {
        type: Object,
    },
    ended_at: {
        type: Date,
    },
    items: {
        object: {
            type: String,
            // required: true,
        },
        data: [],
        has_more: {
            type: Boolean,
            // required: true,
        },
        url: {
            type: String,
        },
    },
    latest_invoice: {
        type: String,
        // ref: "StripeInvoice",
    },
    livemode: {
        type: Boolean,
        // required: true,
    },
    metadata: {
        type: Object,
    },
    next_pending_invoice_item_invoice: {
        type: Date,
    },
    on_behalf_of: {
        type: String,
    },
    pause_collection: {
        type: Object,
    },
    payment_settings: {
        payment_method_options: {
            type: Object,
        },
        payment_method_types: {
            type: Object,
        },
        save_default_payment_method: {
            type: String,
        },
    },
    pending_invoice_item_interval: {
        type: Object,
    },
    pending_setup_intent: {
        type: String,
    },
    pending_update: {
        type: Object,
    },
    schedule: {
        type: String,
    },
    start_date: {
        type: Date,
        // required: true,
    },
    status: {
        type: String,
        // required: true,
    },
    test_clock: {
        type: String,
    },
    transfer_data: {
        type: Object,
    },
    trial_end: {
        type: Date,
    },
    trial_start: {
        type: Date,
    },
});

module.exports = mongoose.model("StripeSubscription", StripeSubscriptionSchema);
