// import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const options = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'develop',
  entities: ["dist/src/entities/*.entity.js"],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

module.exports = options;