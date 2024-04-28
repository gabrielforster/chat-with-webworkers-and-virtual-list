CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password_hash CHAR(64) NOT NULL, -- SHA-256 from password string
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    message TEXT NOT NULL,
    type ENUM('text', 'image', 'video', 'document') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS messages_metadata (
    id SERIAL PRIMARY KEY,
    message_id SERIAL NOT NULL,
    data JSONB NOT NULL,

    FOREIGN KEY (message_id) REFERENCES messages(id)
);
