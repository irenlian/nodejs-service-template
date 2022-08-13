'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.runSql(`
    CREATE TYPE project_status AS ENUM ('pending', 'in_progress', 'completed');

    CREATE TABLE projects (
      id SERIAL PRIMARY KEY,
      title VARCHAR(1000) NOT NULL,
      description TEXT NOT NULL,
      template_id INT,
      start_date TIMESTAMP DEFAULT NOW() NOT NULL,
      end_date TIMESTAMP,
      logo VARCHAR(1000),
      status project_status DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    );
    
    CREATE TRIGGER tr_project_updated_at
      BEFORE UPDATE ON projects
      FOR EACH ROW
      EXECUTE PROCEDURE set_updated_at_column();
  `);
};

exports.down = function(db) {
  return db.runSql(`
    DROP TRIGGER tr_project_updated_at ON projects;
    DROP TABLE projects;
    DROP TYPE project_status;
  `);
};

exports._meta = {
  "version": 1
};
