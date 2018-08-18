 
-- \l reviews_db

CREATE TABLE users (
  id int NOT NULL,
  name text,
  photo text,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id int NOT NULL,
  name text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int NOT NULL,
  listing_id int NOT NULL,
  user_id int NOT NULL,
  accuracy DECIMAL(2,1) NOT NULL,
  communication DECIMAL(2,1) NOT NULL,
  cleanliness DECIMAL(2,1) NOT NULL, 
  location DECIMAL(2,1) NOT NULL,
  check_in DECIMAL(2,1) NOT NULL,
  _value DECIMAL(2,1) NOT NULL,
  _date date NOT NULL, --date is specific to postgress
  content text,
  -- is_reported boolean NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


--postgres -D /usr/local/var/postgres
-- \copy reviews FROM ReviewData.csv DELIMITER ',' CSV
-- psql DATABASE NAME
-- \l - list db
-- \c  use database
-- \d - list tables
-- \i postgreSchema.sql   - use schema
-- \dt - show tables
-- \q
-- pgbench -i dbname
-- pgbench -c 1 <databasename> -f <sqlfile>

-- index
-- CREATE INDEX index_name ON table_name (column1_name, column2_name);






-- pg stats statement sl