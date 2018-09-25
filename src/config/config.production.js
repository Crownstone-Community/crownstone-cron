module.exports = {
  mongoDs: {
    "connector": "loopback-connector-mongodb",
    "name": process.env.DATA_TABLE,
    "url": "mongodb://" + process.env.MONGODB_USER + ":"
      + process.env.MONGODB_PASSWORD + "@"
      + process.env.MONGODB_HOST + ":"
      + process.env.MONGODB_PORT + "/"
      + process.env.DATA_TABLE + "?authSource=admin&ssl=true",
  },
  userDs: {
    "connector": "loopback-connector-mongodb",
    "name": process.env.USER_TABLE,
    "url": "mongodb://" + process.env.MONGODB_USER + ":"
      + process.env.MONGODB_PASSWORD + "@"
      + process.env.MONGODB_HOST + ":"
      + process.env.MONGODB_PORT + "/"
      + process.env.USER_TABLE + "?authSource=admin&ssl=true",
  },
  filesDs: {
    "connector": "loopback-component-storage-gridfs",
    "name": process.env.FILES_TABLE,
    "url": "mongodb://" + process.env.MONGODB_USER + ":"
      + process.env.MONGODB_PASSWORD + "@"
      + process.env.MONGODB_HOST + ":"
      + process.env.MONGODB_PORT + "/"
      + process.env.FILES_TABLE + "?authSource=admin&ssl=true",
  },
  ToonIntegration: {
    clientId:     process.env.TOON_CLIENT_ID,
    clientSecret: process.env.TOON_CLIENT_SECRET
  },
  snitchUrl: process.env.SNITCH_URL,
  logEntries: process.env.LOG_ENTRIES_TOKEN
};
