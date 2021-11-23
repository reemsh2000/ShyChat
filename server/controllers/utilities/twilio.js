const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = (req, res) => {
  client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verifications.create({ to: `${req.body.phone}`, channel: 'sms' })
    .then((verification) => {
      res.json({
        success: true,
        message: `Verification code sent to ${verification.to}`,
        code: verification.status,
      });
    }).catch((err) => {
      res.json({
        success: false,
        message: err.message,
      });
    });
};

const verifySMS = (req, res) => {
  client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verificationChecks.create({ to: `${req.body.phone}`, code: req.body.code })
    .then((verification) => {
      res.json({
        success: true,
        message: `Verification code sent to ${verification.to}`,
        code: verification.status,
      });
    }).catch((err) => {
      res.json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = { sendSMS, verifySMS };
