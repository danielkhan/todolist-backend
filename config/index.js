const bunyan = require('bunyan');

module.exports = {
  development: {
    JWT_SECRET: 'PLEASE_CHANGE',
    db: {
      host: 'localhost',
      port: 27017,
      name: 'khan-dev',
    },
    logger: () =>
      bunyan.createLogger({
        name: 'todolist-backend-development',
        level: 'debug',
      }),
    swagger: {
      info: {
        title: 'todolist Development',
        version: '1.0.0',
        description: 'todolist API',
      },
      host: 'localhost:3001',
      basePath: '/api/v1',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      securityDefinitions: {
        BearerAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
        },
      },
    },
  },
  production: {
    JWT_SECRET: 'PLEASE_CHANGE',
    db: {
      host: 'localhost',
      port: 27017,
      name: 'khan-prod',
    },
    logger: () =>
      bunyan.createLogger({
        name: 'todolist-backend-production',
        level: 'info',
      }),
  },
  test: {
    JWT_SECRET: 'PLEASE_CHANGE',
    db: {
      host: 'localhost',
      port: 27017,
      name: 'khan-test',
    },
    logger: () =>
      bunyan.createLogger({
        name: 'todolist-backend-test',
        level: 'error',
      }),
  },
};
