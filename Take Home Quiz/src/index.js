const mongoose = require('mongoose');
const config = require('./core/config');
const seedAll = require('./seeder');

const { env, port } = config;

const logger = require('./core/logger')('app');
const server = require('./core/server');

const app = server.listen(port, async (err) => {
  if (err) {
    logger.fatal(err, 'Failed to start the server.');
    process.exit(1);
  } else {
    logger.info(`Server runs at port ${port} in ${env} environment`);
  }

  try {
    await seedAll();
    logger.info('Database seeded successfully.');
  } catch (Seederr) {
    logger.error(Seederr, 'Failed to seed the database.');
  }
});

// ... kode lainnya ...

mongoose
  .connect(config.database.url, config.database.options)
  .then(async () => {
    console.log('Connected to MongoDB');

    // --- TARO DI SINI ---
    await seedAll();
    // --------------------
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
  });

process.on('uncaughtException', (err) => {
  logger.fatal(err, 'Uncaught exception.');

  // Shutdown the server gracefully
  app.close(() => process.exit(1));

  // If a graceful shutdown is not achieved after 1 second,
  // shut down the process completely
  setTimeout(() => process.abort(), 1000).unref();
  process.exit(1);
});
