const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recovery = new Schema({
    email: String,
    token: String,
    expirationdate: Date
}, { versionKey: false })

module.exports = Recovery;