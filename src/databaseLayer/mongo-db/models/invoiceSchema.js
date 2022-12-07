const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StripeInvoiceSchema = new mongoose.Schema({
    id: {
        type: String,
        // required: true,
    },
    invoice_id: {
        type: String,
    },
    object: {
        type: String,
        // required: true,
    },
    account_country: {
        type: String,
        // required: true,
    },
    account_name: {
        type: String,
        // required: true,
    },
    account_tax_ids: {
        type: [String],
        default: null,
    },
    amount_due: {
        type: Number,
        // required: true,
    },
    amount_paid: {
        type: Number,
        default: 0,
    },
    amount_remaining: {
        type: Number,
        // required: true,
    },
    application: {
        type: String,
        default: null,
    },
    application_fee_amount: {
        type: Number,
        default: null,
    },
    attempt_count: {
        type: Number,
        default: 0,
    },
    attempted: {
        type: Boolean,
        default: false,
    },
    auto_advance: {
        type: Boolean,
    },
    automatic_tax: {
        enabled: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            default: null,
        },
    },
    billing_reason: {
        type: String,
        default: "manual",
    },
    charge: {
        type: Object,
        // ref: "StripeCharge",
    },
    collection_method: {
        type: String,
    },
    created: {
        type: Number,
        // required: true,
    },
    currency: {
        type: String,
    },
    custom_fields: {
        type: Object,
        default: null,
    },
    customer: {
        type: Object,
        // ref: "StripeCustomer",
    },
    description: {
        type: String,
    },
    hosted_invoice_url: {
        type: String,
    },
    lines: {
        object: {
            type: String,
        },
        data: {
            type: [Object],
        },
        has_more: {
            type: Boolean,
        },
        url: {
            type: String,
        },
    },
    metadata: {
        type: Object,
    },
    payment_intent: {
        type: String,
    },
    period_end: {
        type: Date,
    },
    period_start: {
        type: Date,
    },
    status: {
        type: String,
    },
    subscription: {
        type: Object,
        // ref: "StripeSubscription",
    },
    total: {
        type: Number,
    },
    customer_address: {
        type: Object,
        default: null,
    },
    customer_email: {
        type: String,
        // required: true,
    },
    customer_name: {
        type: String,
        default: null,
    },
    customer_phone: {
        type: String,
        default: null,
    },
    customer_shipping: {
        type: Object,
        default: null,
    },
    customer_tax_exempt: {
        type: String,
        default: "none",
    },
    customer_tax_ids: {
        type: [String],
        default: [],
    },
    default_payment_method: {
        type: String,
        default: null,
    },
    default_source: {
        type: String,
        default: null,
    },
    default_tax_rates: {
        type: [Object],
        default: [],
    },
    discount: {
        type: Object,
        default: null,
    },
    discounts: {
        type: [String],
    },
    due_date: {
        type: Date,
    },
    ending_balance: {
        type: Number,
    },
    footer: {
        type: String,
    },
    from_invoice: {
        type: Object,
        default: null,
    },
    invoice_pdf: {
        type: String,
    },
    last_finalization_error: {
        type: Object,
        default: null,
    },
    livemode: {
        type: Boolean,
    },
    next_payment_attempt: {
        type: Date,
    },
    number: {
        type: String,
    },
    on_behalf_of: {
        type: String,
    },
    paid: {
        type: Boolean,
    },
    paid_out_of_band: {
        type: Boolean,
    },
    payment_settings: {
        type: Object,
    },
    post_payment_credit_notes_amount: {
        type: Number,
    },
    pre_payment_credit_notes_amount: {
        type: Number,
    },
    quote: {
        type: String,
    },
    receipt_number: {
        type: String,
    },
    rendering_options: {
        type: Object,
    },
    starting_balance: {
        type: Number,
    },
    statement_descriptor: {
        type: String,
    },
    status_transitions: {
        type: Object,
    },
    subscription_proration_date: {
        type: Number,
    },
    subtotal: {
        type: Number,
    },
    subtotal_excluding_tax: {
        type: Number,
    },
    tax: {
        type: Number,
    },
    test_clock: {
        type: String,
    },
    threshold_reason: {
        type: Object,
    },
    total_discount_amounts: {
        type: [Object],
    },
    total_excluding_tax: {
        type: Number,
    },
    total_tax_amounts: {
        type: [Object],
    },
    transfer_data: {
        type: Object,
    },
    webhooks_delivered_at: {
        type: Date,
    },
});

module.exports = mongoose.model("StripeInvoice", StripeInvoiceSchema);
