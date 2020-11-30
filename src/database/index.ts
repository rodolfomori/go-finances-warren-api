import { createConnection, Connection } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = {
    name: 'postgres',
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'transactions-postgres',
    entities: ['./src/models/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  };

  return createConnection(
    Object.assign(defaultOptions, {
      name: process.env.NODE_ENV === 'test' ? 'test-conection' : defaultOptions.name,
      host: process.env.NODE_ENV === 'test' ? 'localhost' : defaultOptions.host,
      database:
        process.env.NODE_ENV === 'test' ? 'warren-bank-test'
          : defaultOptions.database,
    }),
  );
};

