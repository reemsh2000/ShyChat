const { getUserConversations } = require('../../database/queries');

// eslint-disable-next-line consistent-return
const getContacts = async (req, res) => {
  const { id } = req.userObj;

  try {
    const { rows } = await getUserConversations(id);
    return res.json({ data: rows });
  } catch (err) {
    if (err.details) {
      res.status(400).json({ message: err.details[0].message });
    }
  }
};
module.exports = getContacts;
