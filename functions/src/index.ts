import * as functions from "firebase-functions";

const createProfile = require("./user/createProfile");

module.exports = {
  authOnCreate: functions.auth.user().onCreate(createProfile),
};
