const { getChatMessages } = require('../../database/queries');

const getMessages = async (req, res) => {
  const { id } = req.userObj;
  console.log(req.body);
  const { receiverId } = req.body;
  try {
    const { rows } = await getChatMessages(id, receiverId);
    res.json({ data: rows });
  } catch (err) {
    if (err.details) {
      res.status(400).json({ message: err.details[0].message });
    }
  }
};
module.exports = getMessages;
