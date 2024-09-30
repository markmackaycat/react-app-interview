-- src/data/init.sql

CREATE TABLE IF NOT EXISTS books (
    ISBN BIGINT PRIMARY KEY,
    Title VARCHAR(255),
    CoverURL TEXT,
    AuthorName VARCHAR(100),
    Review VARCHAR(255)
);

DO $$
DECLARE
    json_data JSON;
BEGIN
    RAISE NOTICE 'Reading books.json file...';
    
    SELECT pg_catalog.pg_read_file('/docker-entrypoint-initdb.d/library_data.json', 0, 1000000) INTO json_data;

    INSERT INTO books (ISBN, Title, CoverURL, AuthorName, Review)
    SELECT 
        (item->>'ISBN')::BIGINT,
        item->>'Title',
        item->>'Cover URL',
        item->>'Author Name',
        item->>'Review'
    FROM 
        json_array_elements(json_data) AS item;

    RAISE NOTICE 'Data inserted successfully.';

END
$$ LANGUAGE plpgsql;
