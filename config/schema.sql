DROP DATABASE IF EXISTS bets_db;
CREATE DATABASE bets_db;
USE bets_db;

CREATE TABLE users (
	id int unique not null auto_increment,
    username varchar(255) unique not null,
    /* set admin to true if the user should have admin access*/
    admin boolean default false
);

CREATE TABLE ballot (
	/* ballot refers to a collection of possible bet options */
	id int unique not null auto_increment,
    name varchar(255) not null unique,
    expired boolean,
    expire_dt datetime,
    
    /* Setup for 3 different bet options */
    bet_text_1 varchar(255),
    bet_options_1 varchar(255),
    bet_answer_1 varchar(255),
    
    bet_text_2 varchar(255),
    bet_options_2 varchar(255),
    bet_answer_2 varchar(255),
    
    bet_text_3 varchar(255),
    bet_options_3 varchar(255),
    bet_answer_3 varchar(255),
    
    winning_user_id int
);

CREATE TABLE bets (
	/* bets referse to one users selections for a ballot (collection of bet options) */
	id int unique not null auto_increment,
    user_id int not null,
    ballot_id int not null,
    
    /* setup for 3 bet options. user_answer_1 should correspond to ballot.bet_text_1 */
    user_answer_1 varchar(255),
    answer_truth_1 boolean,
    
    user_answer_2 varchar(255),
    answer_truth_2 boolean,
    
    user_answer_3 varchar(255),
    answer_truth_3 boolean,
    
    total_right int
);