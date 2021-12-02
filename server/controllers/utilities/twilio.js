const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);
const { signToken } = require('./tokenFunctions');
const { ApproveChange, getIdByPhoneNumber } = require('../../database/queries');

const sendSMS = async (req, res, next) => {
  const { phoneNumber } = req.body;
  try {
    const verification = await client.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: `${phoneNumber}`, channel: 'sms' });
    if (verification.status === 'pending') {
      res
        .status(201)
        .json({
          message: 'message send and your account need verfication code',
        });
    } else {
      res.status(400).json({ message: 'Error sending verification code' });
    }
  } catch (error) {
    next(error);
  }
};

const verifySMS = async (req, res, next) => {
  const { phoneNumber, code } = req.body;
  try {
    const verification = await client.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: `${phoneNumber}`, code });
    if (verification.status === 'approved') {
      await ApproveChange(phoneNumber);
      const { rows } = await getIdByPhoneNumber(phoneNumber);
      const {
        id, photo, bio, name,
      } = rows[0];
      const token = await signToken({
        id, phoneNumber, photo, bio, name,
      });
      res.cookie('token', token).json({
        message: 'You are Logged Successfully and Verification successful',
      });
    } else {
      res.status(400).json({
        message: 'Verification failed',
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { sendSMS, verifySMS };
