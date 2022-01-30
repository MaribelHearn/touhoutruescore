-- A table containing accounts' passwords.
--
-- Why is this a separate table, and not just a "password" column in the
-- accounts table? The reason is straightforward: If we support SSO someday,
-- we will have accounts without passwords.

CREATE TABLE passwords (
    account_id bigint UNIQUE NOT NULL REFERENCES accounts ON DELETE CASCADE,
    password_hash text NOT NULL
);
