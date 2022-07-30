const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const testSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
testSchema.plugin(toJSON);

testSchema.pre('save', async function (next) {
  next();
});

const Test = mongoose.model('test', testSchema);

module.exports = Test;
