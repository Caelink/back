CREATE TABLE smash_match (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  created INT UNSIGNED NOT NULL,
  ladder_id VARCHAR(30) NOT NULL,
  winner_id INT UNSIGNED NOT NULL,
  loser_id INT UNSIGNED NOT NULL,
  livesLeft INT UNSIGNED NOT NULL,
  stage VARCHAR(50) NOT NULL,
  winner_character VARCHAR(50) NOT NULL,
  loser_character VARCHAR(50) NOT NULL
)
