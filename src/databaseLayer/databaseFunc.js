const DEFAULT_DATABASE = "mongo";
const mongoDbFunctions = require("./mongo-db/functions");

const databasePicker = () => {
    switch (DEFAULT_DATABASE) {
        case "mongo":
            return mongoDbFunctions;

        // when new database is added, add a case here
        default:
            return mongoDbFunctions;
    }
};

module.exports = databasePicker;
