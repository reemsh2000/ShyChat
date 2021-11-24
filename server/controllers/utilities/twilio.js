const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = async (req, res) => {
  const verification = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verifications.create({ to: `${req.body.phone}`, channel: 'sms' });
  if (verification.status === 'pending') {
    res.status(200).json({ message: 'Verification code sent' });
  } else {
    res.status(400).json({ message: 'Error sending verification code' });
  }
};

const verifySMS = async (req, res) => {
  const verification = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verificationChecks.create({ to: `${req.body.phone}`, code: req.body.code });
  if (verification.status === 'approved') {
    res.json({
      success: true,
      message: 'Verification successful',
    });
  } else {
    res.json({
      success: false,
      message: 'Verification failed',
    });
  }
};

module.exports = { sendSMS, verifySMS };
