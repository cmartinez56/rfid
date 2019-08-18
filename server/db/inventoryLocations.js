const { connect } = require("./dbConnect");

const  upSertLocation = async ({ _id, name, location }) => {
    let result = null;
    try {
        const db = await connect();
        const inventoryLocation = db.collection("inventoryLocation");
        result = inventoryLocation.updateOne(
            { _id },
            { $set: { name, location } },
            { upsert: true }
        );
    } catch (exception) {
        console.error(exception);
    }

    return result;
};

const  getLocation = async (id) => {
    return new Promise(async (resolve, reject) => {
        const db = await connect();
        const inventoryLocation = db.collection("inventoryLocation");
        inventoryLocation.findOne({_id : id},(err, result) => {
            if(err) {
                reject(err);
                console.error(err);
            }
            else
                resolve(result);
        });
    });
};

const  getLocations = async () => {
    return new Promise(async (resolve, reject) => {
        const db = await connect();
        const inventoryLocation = db.collection("inventoryLocation");
        inventoryLocation.find({}).toArray((err, result) => {
            if(err) {
                reject(err);
                console.error(err);
            }
            else
                resolve(result);
        });
    });
};

module.exports = { upSertLocation, getLocation, getLocations };