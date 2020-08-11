CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    username VARCHAR,
    user_password VARCHAR,
    birthday TIMESTAMP,
    phone_number TEXT
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    serial_number TEXT,
    user_id INTEGER references users (id) ON DELETE CASCADE
);