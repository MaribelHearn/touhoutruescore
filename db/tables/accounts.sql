-- A table containing accounts with which users can log in.

CREATE TABLE accounts (
    -- A unique account ID. Use this for foreign keys.
    account_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    -- The account's email address.
    email text UNIQUE NOT NULL,

    -- The account's username.
    username text UNIQUE NOT NULL
);
