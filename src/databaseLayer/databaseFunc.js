const mongoDbFunctions = require("./mongo-db/functions");

const databasePicker = (database) => {
    switch (database) {
        case "mongo":
            return mongoDbFunctions;

        // when new database is added, add a case here
        default:
            return mongoDbFunctions;
    }
};

module.exports = databasePicker;
