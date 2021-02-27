require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
      stub: './db/migrations/migration.stub',
    },
    seeds: {
      directory: './db/seeds',
      stub: './db/seeds/seed.stub',
    },
  },

  staging: {
    client: process.env.DB_CLIENT || 'postgresql',
    connection: {
      database: process.env.DB_NAME || 'test',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || '',
    },
    pool: {
      min: process.env.DB_POOL_MIN || 1,
      max: process.env.DB_POOL_MAX || 2,
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
      stub: './db/migrations/migration.stub',
    },
    seeds: {
      directory: './db/seeds',
      stub: './db/seeds/seed.stub',
    },
  },

  production: {
    client: process.env.DB_CLIENT || 'postgresql',
    connection: {
      database: process.env.DB_NAME || 'test',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || '',
    },
    pool: {
      min: process.env.DB_POOL_MIN || 1,
      max: process.env.DB_POOL_MAX || 2,
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
      stub: './db/migrations/migration.stub',
    },
    seeds: {
      directory: './db/seeds',
      stub: './db/seeds/seed.stub',
    },
  },
};
