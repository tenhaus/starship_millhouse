var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var CompanySchema = new Schema({
  symbol: {type: String},
  name: {type: String},
  ipoYear: {type: String},
  sector: {type: String},
  industry: {type: String},
  syncedFrom: {type: Date},
  syncedTo: {type: Date},
  updated: {type: Date, default: Date.now}
});

CompanySchema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

Mongoose.model('Company', CompanySchema);
