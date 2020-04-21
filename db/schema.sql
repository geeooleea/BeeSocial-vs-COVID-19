USE beesocial;

CREATE TABLE IF NOT EXISTS activities(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    description VARCHAR(256) NOT NULL,
    img VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(128),
    google_id VARCHAR(128),
    image VARCHAR(1024),
    PRIMARY KEY (id),
    UNIQUE (email)
);
