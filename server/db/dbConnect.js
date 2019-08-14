const mongoClient = require("mongodb").MongoClient;
let dbConnection = null;

const connect = () => {
    return new Promise((resolve, reject) => {
        if(dbConnection)
            resolve(dbConnection);
        else
            mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },
                function(err, client) {
                    if(err)
                        reject(err);
                    else {
                        dbConnection = client.db("inventory");
                        resolve(dbConnection);
                    }
                });
    });
};

const connectNweDb =(dbName) => {
    return connect().then((conn) => {
        return conn.db(dbName);
    })
};

// noinspection ES6ShorthandObjectProperty
// noinspection JSUnusedGlobalSymbols
module.exports = {connect, connectNweDb};

