'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI
            || process.env.MONGOHQ_URL
            || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
            || 'mongodb://aUser:Password01@ds261138.mlab.com:61138/meanapp'
  },

    // Seed database on startup
  seedDB: true
};
