# Setting up the development environment

## PostgreSQL

thtruescore requires PostgreSQL 14.1, so you'll have to set up a local database yourself if you want to run it locally.

Here are the steps:

1. Download and install PostgreSQL 14.1. (Exxactly how to do this is likely to vary based on your OS.) Make sure to record the superuser password you choose somewhere.
2. Create a new database called "thtruescore". (You can actually call it whatever you want, but since it doesn't matter, let's stick with this.)
3. Create a new user; we may as well call it "thtruescore" too. Remember to give it login access.
4. Create a ".env" file to tell the server about your new database. See ".env.sample" for an example.
5. Run "npm run create_tables" to create database tables in your new database.
