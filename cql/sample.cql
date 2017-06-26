
create keyspace IF NOT EXISTS Sample
       with replication = {'class':'SimpleStrategy','replication_factor':1};

create table IF NOT EXISTS Sample.Cookie (
  id text primary key,     // Primary key SHA256 hash
  cookie text,             // Cookie test
  update_time timestamp,   // Update Time
  create_time timestamp    // Create Time
) WITH comment='Cookie management table.';

begin batch

insert into Sample.Cookie ( id, create_time ) VALUES ( '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b', toTimestamp(now()) );
insert into Sample.Cookie ( id, create_time ) VALUES ( 'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35', toTimestamp(now()) );

apply batch;
