const { MongoClient } = require("mongodb");

const url =
  "mongodb://localhost:27017/nodejspracticedb";

let _db;
const mongoClient = (cb) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("CONNECTED");
      _db = client.db();
      cb(client);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw "No database connection available";
  }
};
exports.mongoClient = mongoClient;
exports.getDb = getDb;

//2SBmtqWknVlwAXis
