 
CREATE KEYSPACE review_db

WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
 };

 -- what does this mean 

USE review_db;

CREATE TABLE users (
  id int ,
  name text,
  photo text,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id int ,
  name text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int,
  listing_id int,
  user_id int,
  accuracy DECIMAL,
  communication DECIMAL,
  cleanliness DECIMAL, 
  location DECIMAL,
  check_in DECIMAL,
  value DECIMAL,
  datenow timestamp, 
  content text,
  PRIMARY KEY ((id, listing_id))
);

-- brew install cassandra
-- brew services start cassandra 
-- cqlsh localhost
-- DESCRIBE keyspaces;
-- desc review_db; -- show everything in keyspace
-- describe table;
-- COPY users (id,name,photo) FROM 'UsersData.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
-- COPY listings (id,name) FROM 'sampleData.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
-- COPY review_db.reviews (id,listing_id,user_id,accuracy,communication,cleanliness,location,check_in,value,datenow,content) FROM 'ReviewDataNospike.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
-- COPY review_db.reviews (id,listing_id,user_id,accuracy,communication,cleanliness,location,check_in,value,datenow,content) FROM './DataGen/testreviewdata.csv' WITH DELIMITER = ',' AND HEADER = TRUE;




-- Query of the last 10% 
-- Create / POST - create a new item
INSERT INTO reviews (id,listing_id,user_id,accuracy,communication,cleanliness,location,check_in,value,datenow,content) VALUES (3,2218240,675558,2,3,3.5,4,1.5,2,toTimestamp(now()),'testing')

-- Read / GET - read an item
select * from reviews where listing_id = 1 ; 

-- Update / PUT - update an item

UPDATE review_db.reviews SET accuracy = 4 WHERE id = 1;
  -- UPDATE cycling.cyclists
  -- SET firstname = 'Marianne,
  -- lastname = 'VOS'
  -- WHERE id = 88b8fd18-b1ed-4e96-bf79-4280797cba80;

  -- how many columns of the item should be updated 
-- Delete / DELETE - delete an item
  DELETE FROM reviews where id = 3;





