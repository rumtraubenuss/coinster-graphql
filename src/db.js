const MongoClient = require('mongodb').MongoClient;

const { DB_HOST, DB_USER, DB_PASS } = process.env;
const dbURI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`;

function handleError(er) {
  console.log(er);
}

let db;

async function init() {
  db = await MongoClient.connect(dbURI).catch(handleError);
  const message = db ? 'DB connected' : 'Connecting DB failed';
  console.log(message);
}

init();

function countAllPrices() {
  return db.collection('prices').count();
}

module.exports = {
  countAllPrices,
};
