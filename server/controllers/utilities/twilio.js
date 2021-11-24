const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = async (req, res, next) => {
  const verification = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verifications.create({ to: `${req.body.phone}`, channel: 'sms' });
  if (verification.status === 'pending') {
    next();
    res.status(400).json({ message: 'Error sending verification code' });
  }
};

const verifySMS = async (req, res, next) => {
  const verification = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verificationChecks.create({ to: `${req.body.phone}`, code: req.body.code });
  if (verification.status === 'approved') {
    next();
  } else {
    res.status(400).json({
      message: 'Verification failed',
    });
  }
};

module.exports = { sendSMS, verifySMS };
