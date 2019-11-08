const mongoose = require('mongoose');

const rentLeadProsSchema = new mongoose.Schema({
    createDate: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        phoneNumber: {
            type: Number,
            unique: true
        },
        phoneType: {
            type: String
        },
    },

    notes: [{
        note: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],

    inquiries: [{
        inquary: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RentLeadInq'
        }
    }],


});

module.exports = RentLeadPros = mongoose.model('RentLeadPros', rentLeadProsSchema);
