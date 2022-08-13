-- rambler up

CREATE TABLE project (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  leader_user_id INT;
  logo TEXT NOT NULL;
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TRIGGER tr_item_updated_at
  BEFORE UPDATE ON item
  FOR EACH ROW
  EXECUTE PROCEDURE set_updated_at_column();

-- rambler down

DROP TABLE project;
