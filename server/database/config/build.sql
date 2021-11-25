BEGIN;

DROP TABLE IF EXISTS users,chat,chatparticipant,message CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(50) UNIQUE NOT NULL,
    password TEXT,
    photo TEXT,
    bio TEXT,
    status boolean  DEFAULT FALSE
);
CREATE TABLE chat(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);
CREATE TABLE chatparticipant(
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
    chatId INTEGER REFERENCES chat(id) ON DELETE CASCADE 
);
CREATE TABLE message(
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
    chatId INTEGER REFERENCES chat(id) ON DELETE CASCADE ,
    content TEXT,
    messageTime VARCHAR(10)
);


COMMIT;