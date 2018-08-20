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
  idone int ,
  name text,
  photo text,
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
  PRIMARY KEY (listing_id, id, name, datenow)
)WITH CLUSTERING ORDER BY (id ASC, name ASC, datenow DESC);


-- https://docs.datastax.com/en/cassandra/2.1/cassandra/operations/ops_configuring_caches_c.html
-- brew install cassandra
-- brew services start cassandra 
-- cqlsh localhost
-- DESCRIBE keyspaces;
-- start server: cassandra -f
-- desc review_db; -- show everything in keyspace
-- describe table;
-- DROP TABLE [IF EXISTS] keyspace_name.table_name : drop table review_db.reviews;
-- COPY users (id,name,photo) FROM 'UsersData.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
-- COPY listings (id,name) FROM 'sampleData.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
-- COPY review_db.reviews (id,listing_id,user_id,accuracy,communication,cleanliness,location,check_in,value,datenow,content) FROM 'ReviewDataNospike.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
-- COPY review_db.reviews (id,listing_id,user_id,accuracy,communication,cleanliness,location,check_in,value,datenow,content) FROM '../../DataGen/test.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
-- COPY review_db.reviews (idone,name,photo,id,listing_id,user_id,accuracy,communication,cleanliness,location,check_in,value,datenow,content) FROM '../../DataGen/combine.csv' WITH DELIMITER = ',' AND HEADER = TRUE;

--nodetool tablehistograms review_db reviews
-- ALTER TABLE reviews WITH compaction = { 'class': 'SizeTieredCompactionStrategy'}
-- nodetool compact review_db reviews


-- Query of the last 10% 
-- Create / POST - create a new item


INSERT INTO reviews (id,listing_id,user_id,accuracy,communication,cleanliness,location,check_in,value,datenow,content) VALUES (3,2218240,675558,2,3,3.5,4,1.5,2,toTimestamp(now()),'testing')

-- Read / GET - read an item


select * from reviews where listing_id = 1; 

-- Update / PUT - update an item

UPDATE review_db.reviews SET accuracy = 4 WHERE id = 1;
  -- UPDATE cycling.cyclists
  -- SET firstname = 'Marianne,
  -- lastname = 'VOS'
  -- WHERE id = 88b8fd18-b1ed-4e96-bf79-4280797cba80;

  -- how many columns of the item should be updated 
-- Delete / DELETE - delete an item
  DELETE FROM reviews where id = 3;


-- ALTER TABLE reviews WITH compaction = { ‘class’ : ‘LeveledCompactionStrategy’ };

-- https://medium.com/linagora-engineering/tunning-cassandra-performances-7d8fa31627e3




