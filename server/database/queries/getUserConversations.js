const connection = require('../config/connection');

const getUserConversations = (id) => connection.query('select id,name,phone,photo from ((select userId from chatparticipant  where chatId in (SELECT chatId FROM chatparticipant WHERE userid=$1) and userid!=$1)chats inner  join users on (users.id=chats.userId))', [id]);

module.exports = getUserConversations;



