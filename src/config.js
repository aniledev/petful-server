module.exports = {
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
};

// add client order variable to .env file