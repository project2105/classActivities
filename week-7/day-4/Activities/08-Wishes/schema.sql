CREATE DATABASE wishes_db;
USE wishes_db;
CREATE TABLE wishes
(
    id int NOT NULL
    AUTO_INCREMENT,
wish varchar
    (255) NOT NULL,
PRIMARY KEY
    (id)
);

    -- Insert a set of records.
    INSERT INTO wishes
        (wish)
    VALUES
        ('Get a job.');
    INSERT INTO wishes
        (wish)
    VALUES
        ('Run 5k.');
    INSERT INTO wishes
        (wish)
    VALUES
        ('Cure cancer.');

    select *
    from wishes
